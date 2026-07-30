import { Component, OnInit } from '@angular/core';
import { GlobalService, Etablissement, CompareRow } from 'app/modules/admin/serviceGlobal/serviceGlobal.service'; 
import { comparer, criteresEtablissement, type ResultatComparaison } from 'app/shared/utils/comparateur.logique';
import confetti from 'canvas-confetti';        //export par défaut                                               
import { ViewChildren, QueryList, ElementRef } from '@angular/core';


//     selectedEtablissement: any = null;
//     etablissements: any;
//     etablissementsCriteres: any[]=[]


// constructor(
//         private GlobalService: GlobalService
//     ) {

//     }
// ngOnInit(): void {
//         // throw new Error('Method not implemented.');
//         this.etablissements = this.GlobalService.etablissements

//         this.verifetablissementCriteres()

//         console.log("etablissementsCriteres :",this.etablissementsCriteres);

//     }




// }
@ViewChildren('carteEtab') cartesEtab!: QueryList<ElementRef>;
@Component({
  selector: 'Comparateur',
  templateUrl: './comparateur.component.html',
})
export class ComparateurComponent implements OnInit {

  readonly MAX_COMPARE = 3;
  selectedEtablissements: Etablissement[] = [];    // Tableau des établissements sélectionnés 
  resultatComparaison: ResultatComparaison<Etablissement> | null = null;
  private timerComparaison: any = null;          // le "ticket" pour clearTimeout et setTimeout

  // Critères de comparaison
  compareRows: CompareRow[] = [
    { key: 'fraisAnnuels', label: 'Frais de scolarité' },
    { key: 'statut', label: 'Statut' },
    { key: 'type', label: 'Type d\'établissement' },
    { key: 'tauxReussiteExamens', label: 'Taux de réussite Examens' },
    { key: 'tauxInsertion', label: 'Insertion Pro.' },
  ];
  

  constructor(public GlobalService: GlobalService) { }

  recalculerComparaison(immediat: boolean): void{
    if (this.selectedEtablissements.length >= 2){
      if (immediat){
        this.resultatComparaison = comparer(this.selectedEtablissements, criteresEtablissement);
      } else{
        if (this.timerComparaison !== null){
        clearTimeout(this.timerComparaison);
        }
        this.timerComparaison = setTimeout(()=>{this.resultatComparaison = comparer(this.selectedEtablissements, criteresEtablissement)}, 2000);  
        } 
    }
      else{
      this.resultatComparaison = null;
    }
  }
  ngOnInit(): void {
    if (this.GlobalService.etablissements.length >= 2) {
      this.selectedEtablissements = this.GlobalService.etablissements.slice(0, 2); 
    }
    this.recalculerComparaison(true);
  }

//rôle du getter : Je crée une propriété accessible en lecture seule nommée availableEtablissements.
// Quand quelqu'un me demande cette valeur, je prends la liste globale de tous les établissements.
// Je passe cette liste au crible (filtre) pour inspecter chaque établissement un par un.
// Pour chaque établissement, je vérifie la liste de ceux qui ont déjà été sélectionnés : si cet établissement n'est présent dans AUCUN des éléments sélectionnés, alors je le garde.
// Enfin, je renvoie la nouvelle liste contenant uniquement les établissements restants."
  get availableEtablissements(): Etablissement[] {
    return this.GlobalService.etablissements.filter(
      e => !this.selectedEtablissements.some(selected => selected.name === e.name)
    );
  }

  // Vérifie si la limite d'écoles à comparer est atteinte
  get isLimitReached(): boolean {
    return this.selectedEtablissements.length >= this.MAX_COMPARE;
  }

  // Ajoute un établissement sélectionné depuis le dropdown
  onAddEtablissement(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const name = selectElement.value;
    if (!name) return;

    const etablissement = this.GlobalService.etablissements.find(e => e.name === name);
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
  // Donne le gagnant
  estGagnant(etab:Etablissement): boolean{
    if (this.resultatComparaison===null){
      return false;
    } else {
      return this.resultatComparaison.gagnants.some(g=>g.name===etab.name)
    }
  }


  // nombre de colonnes
  getGridColsClass(): string {
    const totalCols = this.selectedEtablissements.length;
    if (totalCols === 1) return 'grid-cols-2';
    if (totalCols === 2) return 'grid-cols-3';
    return 'grid-cols-4';
  }

  //  tableau d' étoiles 
  getStarsArray(noteMoyenne: number | string): number[] {
    const count = typeof noteMoyenne === 'number' ? noteMoyenne : parseInt(noteMoyenne, 10) || 0;
    return Array(count).fill(0);
  }
}