import { Component, OnInit } from '@angular/core';
import { globalService } from 'app/modules/admin/serviceGlobal/serviceGlobal.service';
// import { globalService } from '../serviceGlobal/serviceGlobal.service';

// import { Etablissement, etablissementsData } from '../../../../shared/models/etablissement.model';

@Component({
    selector: 'comparateur',
    templateUrl: './comparateur.component.html',
})
export class ComparateurComponent implements OnInit{

    selectedEtablissement: any = null;
    etablissements: any;
    etablissementsCriteres: any[]=[]


constructor(
        private globalServive: globalService
    ) {

    }
ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.etablissements = this.globalServive.etablissements

        this.verifetablissementCriteres()

        console.log("etablissementsCriteres :",this.etablissementsCriteres);
        
    }

    async verifetablissementCriteres(){
        // this.etablissementsCriteres=[]
        for (let i = 0; i < this.etablissements.length; i++) {
            const element = this.etablissements[i];
            // if (element.statut=="Privé") {
                this.etablissementsCriteres.push(element)
            // }

            
        }
    }

    // etablissements: Etablissement[] = etablissementsData;

    // etablissementsCriteres = [
    //     { label: 'Statut' },
    //     { label: 'Insertion professionnelle' },
    //     { label: 'Qualité / Prix' },
    //     { label: 'BTS' },
    //     { label: 'LM(D)' },
    // ];

    selectedForComparison: any[] = [];

    toggleSelection(etablissementsCriteres: any): void {
        const index = this.selectedForComparison.findIndex(item => item.name === etablissementsCriteres.name);

        if (index >= 0) {
            this.selectedForComparison.splice(index, 1);
        } else if (this.selectedForComparison.length < 3) {
            this.selectedForComparison.push(etablissementsCriteres);
        }
    }
}