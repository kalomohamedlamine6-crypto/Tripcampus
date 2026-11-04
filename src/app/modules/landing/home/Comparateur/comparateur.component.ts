import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
    etablissementsProvisoires,
    formationsProvisoires,
    offresFormationEtablissement
} from 'app/data/donnees-provisoires';
import {
    comparer,
    criteresEtablissement,
    ComparisonItem,
    ResultatComparaison
} from 'app/shared/utils/comparateur.logique';

interface CompareRow
{
    key: 'fraisAnnuels' | 'statut' | 'tauxReussiteExamens';
    label: string;
}

@Component({
    selector: 'Comparateur',
    templateUrl: './comparateur.component.html'
})
export class ComparateurComponent implements OnInit
{
    readonly maxCompare = 3;
    readonly formations = formationsProvisoires;
    selectedFormationId: string | null = null;
    selectedEtablissements: ComparisonItem[] = [];
    resultatComparaison: ResultatComparaison<ComparisonItem> | null = null;
    readonly compareRows: CompareRow[] = [
        { key: 'fraisAnnuels', label: 'Frais de scolarité annuels' },
        { key: 'statut', label: 'Statut' },
        { key: 'tauxReussiteExamens', label: 'Taux de réussite' }
    ];
    isLoading = true;
    loadError: string | null = null;
    etablissementControl = new FormControl('');
    filteredEtablissements$!: Observable<ComparisonItem[]>;

    ngOnInit(): void
    {
        this.selectedFormationId = this.formations[0]?.id ?? null;
        this.filteredEtablissements$ = this.etablissementControl.valueChanges.pipe(
            startWith(''),
            map((value: unknown) => {
                const recherche = typeof value === 'string'
                    ? value
                    : this._isComparisonItem(value) ? value.name : '';

                return recherche ? this._filter(recherche) : this.availableEtablissements.slice();
            })
        );
        this.isLoading = false;
    }

    get availableEtablissements(): ComparisonItem[]
    {
        if (!this.selectedFormationId)
        {
            return [];
        }

        return etablissementsProvisoires
            .map(etablissement => {
                const offre = offresFormationEtablissement.find(item =>
                    item.etablissementId === etablissement.id &&
                    item.formationId === this.selectedFormationId
                );

                if (!offre)
                {
                    return null;
                }

                const formation = this.formations.find(item => item.id === offre.formationId);

                const item: ComparisonItem = {
                    id: etablissement.id,
                    name: etablissement.nom,
                    ville: etablissement.ville,
                    statut: etablissement.statut === 'public' ? 'Public' : 'Privé',
                    niveau: formation?.niveau ?? '',
                    fraisAnnuels: offre.fraisScolariteAnnuelsFictifs,
                    tauxReussiteExamens: offre.tauxReussiteFictif
                };

                return item;
            })
            .filter((item): item is ComparisonItem => item !== null)
            .filter(item => !this.selectedEtablissements.some(selected => selected.id === item.id));
    }

    get isLimitReached(): boolean
    {
        return this.selectedEtablissements.length >= this.maxCompare;
    }

    get selectedFormationName(): string
    {
        const formation = this.formations.find(item => item.id === this.selectedFormationId);

        return formation ? `${formation.nom} · ${formation.niveau}` : '';
    }

    onFormationChange(formationId: string | null): void
    {
        this.selectedFormationId = formationId;
        this.selectedEtablissements = [];
        this.resultatComparaison = null;
        this.etablissementControl.setValue('');
    }

    onOptionSelected(event: MatAutocompleteSelectedEvent): void
    {
        const selected: unknown = event.option.value;

        if (this._isComparisonItem(selected) && !this.isLimitReached)
        {
            this.selectedEtablissements = [...this.selectedEtablissements, selected];
            this.recalculerComparaison();
        }

        this.etablissementControl.setValue('');
    }

    onRemoveEtablissement(id: string): void
    {
        this.selectedEtablissements = this.selectedEtablissements.filter(item => item.id !== id);
        this.recalculerComparaison();
    }

    recalculerComparaison(): void
    {
        this.resultatComparaison = this.selectedEtablissements.length >= 2
            ? comparer(this.selectedEtablissements, criteresEtablissement)
            : null;
    }

    displayFn(etablissement: ComparisonItem | null): string
    {
        return etablissement?.name ?? '';
    }

    getInitiales(nom: string): string
    {
        return nom.trim().split(/\s+/).slice(0, 2).map(part => part.charAt(0)).join('').toLocaleUpperCase('fr');
    }

    getGridColsClass(): string
    {
        if (this.selectedEtablissements.length === 1)
        {
            return 'grid-cols-2';
        }

        if (this.selectedEtablissements.length === 2)
        {
            return 'grid-cols-3';
        }

        return 'grid-cols-4';
    }

    trackById(index: number, item: { id: string }): string
    {
        return item.id;
    }

    trackByFormationId(index: number, item: { id: string }): string
    {
        return item.id;
    }

    trackByCompareRow(index: number, item: CompareRow): string
    {
        return item.key;
    }

    getScore(etablissement: ComparisonItem): number
    {
        return this.resultatComparaison?.scores.get(etablissement) ?? 0;
    }

    private _filter(recherche: string): ComparisonItem[]
    {
        const query = this._normaliser(recherche);

        return this.availableEtablissements.filter(etablissement =>
            this._normaliser(`${etablissement.name} ${etablissement.ville}`).includes(query)
        );
    }

    private _normaliser(value: string): string
    {
        return value.trim().toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    private _isComparisonItem(value: unknown): value is ComparisonItem
    {
        return typeof value === 'object' && value !== null &&
            'id' in value && 'name' in value &&
            typeof (value as any).id === 'string' && typeof (value as any).name === 'string';
    }
}
