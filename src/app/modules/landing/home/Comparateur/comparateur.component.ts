import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { GlobalService } from 'app/modules/admin/serviceGlobal/serviceGlobal.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import confetti from 'canvas-confetti';

import type { Etablissement, Formation } from 'app/core/models';
import {
  comparer,
  criteresEtablissement,
  type ComparisonItem,
  type CriterionKey,
  type ResultatComparaison,
} from 'app/shared/utils/comparateur.logique';

interface CompareRow {
  key: CriterionKey | 'statut' | 'type';
  label: string;
}

@Component({
  selector: 'Comparateur',
  templateUrl: './comparateur.component.html',
})
export class ComparateurComponent implements OnInit {

  readonly maxCompare = 3;

  @ViewChildren('carteEtab') cartesEtab!: QueryList<ElementRef>;

  selectedFormationId: string | null = null;
  selectedEtablissements: ComparisonItem[] = [];
  resultatComparaison: ResultatComparaison<ComparisonItem> | null = null;
  compareRows: CompareRow[] = [
    { key: 'fraisAnnuels', label: 'Frais de scolarité' },
    { key: 'statut', label: 'Statut' },
    { key: 'type', label: 'Type d\'établissement' },
    { key: 'tauxReussiteExamens', label: 'Taux de réussite Examens' },
    { key: 'tauxInsertion', label: 'Insertion Pro.' },
  ];

  private timerComparaison: any = null;
  etablissementControl = new FormControl('');
  filteredEtablissements$!: Observable<ComparisonItem[]>;

  constructor(public _globalService: GlobalService) {}

  get formations(): Formation[] {
    return this._globalService.formations || [];
  }

  get availableEtablissements(): ComparisonItem[] {
    if (!this.selectedFormationId) {
      return [];
    }

    return this._getItemsForFormation(this.selectedFormationId)
      .filter((etab) => !this.selectedEtablissements.some((selected) => selected.id === etab.id));
  }

  private _getItemsForFormation(formationId: string): ComparisonItem[] {
    return this._globalService.etablissements
      .map((etablissement) => {
        const propose = this._globalService.proposes.find(
          (item) => item.etablissementId === etablissement.id && item.formationId === formationId
        );

        if (!propose) {
          return null;
        }

        const ville = this._globalService.villes.find((item) => item.id === etablissement.villeId)?.nom ?? 'Ville inconnue';

        return {
          ...etablissement,
          ...propose,
          id: etablissement.id,
          name: etablissement.nom,
          ville,
          fraisAnnuels: propose.fraisAnnuels,
          tauxReussiteExamens: propose.tauxReussite,
        } as ComparisonItem;
      })
      .filter((item): item is ComparisonItem => !!item);
  }

  private _filter(recherche: string): ComparisonItem[] {
    return this.availableEtablissements.filter((etab) =>
      etab && etab.name && etab.name.toLowerCase().includes(recherche.toLowerCase())
    );
  }

  displayFn(etab: ComparisonItem): string {
    return etab && etab.name ? etab.name : '';
  }

  get isLimitReached(): boolean {
    return this.selectedEtablissements.length >= this.maxCompare;
  }

  ngOnInit(): void {
    this.selectedFormationId = this.formations[0]?.id ?? null;

    this.filteredEtablissements$ = this.etablissementControl.valueChanges.pipe(
      startWith(''),
      map((saisie) => {
        const recherche = typeof saisie === 'string' ? saisie : saisie?.name;
        return recherche ? this._filter(recherche) : this.availableEtablissements.slice();
      })
    );

    this.recalculerComparaison(true);
  }

  onFormationChange(formationId: string | null): void {
    this.selectedFormationId = formationId;
    this.selectedEtablissements = [];
    this.resultatComparaison = null;
    this.etablissementControl.setValue('');
  }

  recalculerComparaison(immediat: boolean): void {
    if (this.selectedFormationId && this.selectedEtablissements.length >= 2) {
      if (immediat) {
        this.resultatComparaison = comparer(this.selectedEtablissements, criteresEtablissement);
        setTimeout(() => this.lancerConfettis(), 0);
      } else {
        if (this.timerComparaison !== null) {
          clearTimeout(this.timerComparaison);
        }
        this.timerComparaison = setTimeout(() => {
          this.resultatComparaison = comparer(this.selectedEtablissements, criteresEtablissement);
          setTimeout(() => this.lancerConfettis(), 0);
        }, 2000);
      }
    } else {
      this.resultatComparaison = null;
    }
  }

  estGagnant(etab: ComparisonItem): boolean {
    if (this.resultatComparaison === null) {
      return false;
    }

    return this.resultatComparaison.gagnants.some((g) => g.id === etab.id);
  }

  lancerConfettis(): void {
    const cartes = this.cartesEtab?.toArray() ?? [];

    for (let i = 0; i < this.selectedEtablissements.length; i++) {
      const etab = this.selectedEtablissements[i];
      if (this.estGagnant(etab)) {
        const rect = cartes[i]?.nativeElement?.getBoundingClientRect();
        if (!rect) {
          continue;
        }

        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({
          origin: { x, y },
          zIndex: 9999,
          particleCount: 80,
          spread: 45,
          scalar: 1.2,
          colors: ['#1a237e', '#1a1288', '#8a0d9b', '#bd123a', '#fbb1b1']
        });
      }
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const etab = event.option.value as ComparisonItem;

    if (etab && !this.isLimitReached) {
      const nombreAvant = this.selectedEtablissements.length;
      this.selectedEtablissements = [...this.selectedEtablissements, etab];

      if (nombreAvant === 1) {
        this.recalculerComparaison(false);
      } else {
        this.recalculerComparaison(true);
      }
    }

    this.etablissementControl.setValue('');
  }

  onRemoveEtablissement(id: string): void {
    this.selectedEtablissements = this.selectedEtablissements.filter((e) => e.id !== id);
    this.recalculerComparaison(true);
    this.etablissementControl.setValue(this.etablissementControl.value);
  }

  getGridColsClass(): string {
    const totalCols = this.selectedEtablissements.length;
    if (totalCols === 1) { return 'grid-cols-2'; }
    if (totalCols === 2) { return 'grid-cols-3'; }
    return 'grid-cols-4';
  }

  getStarsArray(noteMoyenne: number | string): number[] {
    const count = typeof noteMoyenne === 'number' ? noteMoyenne : parseInt(String(noteMoyenne), 10) || 0;
    return Array(count).fill(0);
  }
}
