import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { GlobalService, Etablissement, CompareRow } from 'app/modules/admin/serviceGlobal/serviceGlobal.service';
import { comparer, criteresEtablissement, type ResultatComparaison } from 'app/shared/utils/comparateur.logique';
import confetti from 'canvas-confetti'; 



@Component({
  selector: 'Comparateur',
  templateUrl: './comparateur.component.html',
})
export class ComparateurComponent implements OnInit {

  readonly maxCompare = 3;
  @ViewChildren('carteEtab') cartesEtab!: QueryList<ElementRef>;
  selectedEtablissements: Etablissement[] = [];    // Tableau des établissements sélectionnés
  resultatComparaison: ResultatComparaison<Etablissement> | null = null;
  compareRows: CompareRow[] = [
    { key: 'fraisAnnuels', label: 'Frais de scolarité' },
    { key: 'statut', label: 'Statut' },
    { key: 'type', label: 'Type d\'établissement' },
    { key: 'tauxReussiteExamens', label: 'Taux de réussite Examens' },
    { key: 'tauxInsertion', label: 'Insertion Pro.' },
  ];
  private timerComparaison: any = null;          // le "ticket" pour clearTimeout et setTimeout

  constructor(public _globalService: GlobalService) { }

  get availableEtablissements(): Etablissement[] {
    return this._globalService.etablissements.filter(
      e => !this.selectedEtablissements.some(selected => selected.name === e.name)
    );
  }

  // Vérifie si la limite d'écoles à comparer est atteinte
  get isLimitReached(): boolean {
    return this.selectedEtablissements.length >= this.maxCompare;
  }

  ngOnInit(): void {
    if (this._globalService.etablissements.length >= 2) {
      this.selectedEtablissements = this._globalService.etablissements.slice(0, 2);
    }
    this.recalculerComparaison(true);
  }

  recalculerComparaison(immediat: boolean): void{
    if (this.selectedEtablissements.length >= 2){
      if (immediat){
        this.resultatComparaison = comparer(this.selectedEtablissements, criteresEtablissement);
        setTimeout(() => this.lancerConfettis(), 0);
      } else{
        if (this.timerComparaison !== null){
          clearTimeout(this.timerComparaison);
        }
        this.timerComparaison = setTimeout(() => {
          this.resultatComparaison = comparer(this.selectedEtablissements, criteresEtablissement);
          setTimeout(() => this.lancerConfettis(), 0);}, 2000);
      }
    }
    else{
      this.resultatComparaison = null;
    }
  }

  // Donne le statut de gagnant pour un établissement donné
  estGagnant(etab: Etablissement): boolean{
    if (this.resultatComparaison===null){
      return false;
    } else {
      return this.resultatComparaison.gagnants.some(g=>g.name===etab.name);
    }
  }

  // Lancer des fleurs😅au(x) gagnant(s)
  lancerConfettis(): void {
    const cartes = this.cartesEtab.toArray();
    for (let i = 0; i < this.selectedEtablissements.length; i++) {
      const etab = this.selectedEtablissements[i];
      if (this.estGagnant(etab)) {        
        const rect = cartes[i].nativeElement.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({ origin: { x, y }, zIndex: 9999, particleCount: 100, spread: 45, scalar: 1.2, colors: ['[#1a237e]', '#1a1288', '#8a0d9b', '#bd123a', '#fbb1b1'] });
      }
    }
  }

  // Ajoute un établissement sélectionné depuis le dropdown
  onAddEtablissement(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const name = selectElement.value;
    if (!name) {return;}

    const etablissement = this._globalService.etablissements.find(e => e.name === name);
    if (etablissement && !this.isLimitReached) {
      const nombreAvant = this.selectedEtablissements.length;
      this.selectedEtablissements.push(etablissement);
      if (nombreAvant === 1){
        this.recalculerComparaison(false);
      } else{
        this.recalculerComparaison(true);
      }
    }
    selectElement.value = '';

  }

  // Suppression
  onRemoveEtablissement(name: string): void {
    this.selectedEtablissements = this.selectedEtablissements.filter(e => e.name !== name);
    this.recalculerComparaison(true);
  }
  


  // nombre de colonnes
  getGridColsClass(): string {
    const totalCols = this.selectedEtablissements.length;
    if (totalCols === 1) {return 'grid-cols-2';}
    if (totalCols === 2) {return 'grid-cols-3';}
    return 'grid-cols-4';
  }

  //  tableau d' étoiles
  getStarsArray(noteMoyenne: number | string): number[] {
    const count = typeof noteMoyenne === 'number' ? noteMoyenne : parseInt(noteMoyenne, 10) || 0;
    return Array(count).fill(0);
  }
}
