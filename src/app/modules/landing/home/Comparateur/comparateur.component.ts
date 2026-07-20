import { Component, OnInit } from '@angular/core';
import { GlobalService, Etablissement, CompareRow } from 'app/modules/admin/serviceGlobal/serviceGlobal.service';



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

@Component({
  selector: 'Comparateur',
  templateUrl: './comparateur.component.html',
})
export class ComparateurComponent implements OnInit{
  
  readonly MAX_COMPARE = 3;
  
  // Tableau des établissements sélectionnés 
  selectedEtablissements: Etablissement[] = [];
  
  // Critères de comparaison
  compareRows: CompareRow[] = [
    { key: 'fraisAnnuels', label: 'Frais de scolarité' },
    { key: 'statut', label: 'Statut' },
    { key: 'type', label: 'Type d\'établissement' },
    { key: 'tauxReussiteExamens', label: 'Taux de réussite Examens' },
    { key: 'tauxInsertion', label: 'Insertion Pro.' },
  ];

  constructor(public GlobalService: GlobalService) {}

  ngOnInit(): void {
    if (this.GlobalService.etablissements.length >= 2) {
      this.selectedEtablissements = this.GlobalService.etablissements.slice(0, 2);
    }
  }

  //établissements pas encore affichés dans le comparateur
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
      this.selectedEtablissements.push(etablissement);
    }
    selectElement.value = ''; 
  }

  // Suppression
  onRemoveEtablissement(name: string): void {
    this.selectedEtablissements = this.selectedEtablissements.filter(e => e.name !== name);
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