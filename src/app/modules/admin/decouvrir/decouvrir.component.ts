import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from '../serviceGlobal/serviceGlobal.service';

@Component({
    selector: 'decouvrir',
    templateUrl: './decouvrir.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class DecouvrirComponent implements OnInit {
    selectedEtablissement: any = null;
    sidebarOpened = false;
    taskForm: FormGroup;
    etablissements: any;


    // etablissements: {statut: string;
    //     name: string;
    //     note: number | string;
    //     ville: string;
    //     completed: boolean;
    //     priority?: number;
    //     dueDate?: string | null;
    //     notes?: string;
    //     tags?: string[];
    //     type: string;
    //     category: string;
    //     image: string;
    //     address: string;
    //     phone: string;
    //     website: string;
    //     email: string;
    //     description: string;
    //     founded: string;
    //     tauxInsertion?: string;
    //     fraisAnnuels?: string;
    //     tauxReussiteExamens?: number;} = [
    //     {
    //         statut: 'Public',
    //         name: 'Université Virtuelle de Côte d’Ivoire',
    //         note: 4,
    //         ville: 'Abidjan-Cocody',
    //         completed: false,
    //         priority: 1,
    //         dueDate: null,
    //         notes: '',
    //         tags: [],
    //         type: 'Universitaire',
    //         category: 'Université',
    //         image: 'assets/images/avatars/avg-stiftung-nicole-berkovych-projektleiterin-721x1024.jpeg',
    //         address: '01 BP 000 Abidjan',
    //         phone: '+225 21 23 45 67',
    //         website: 'www.uvi.ci',
    //         email: 'contact@uvi.ci',
    //         description: 'Université spécialisée dans l’enseignement et la recherche à distance.',
    //         founded: '2012',
    //         tauxInsertion: 'Très bonne',
    //         fraisAnnuels: '250 000 FCFA',
    //         tauxReussiteExamens: 1,
    //     },
    //     {
    //         statut: 'Privé',
    //         name: 'Institut Supérieur de Management',
    //         note: 3,
    //         ville: 'Abidjan-Cocody',
    //         completed: false,
    //         priority: 1,
    //         dueDate: null,
    //         notes: '',
    //         tags: [],
    //         type: 'Grande école',
    //         category: 'École de Management',
    //         image: 'assets/images/avatars/brian-hughes.jpg',
    //         address: '02 BP 001 Abidjan',
    //         phone: '+225 21 24 56 78',
    //         website: 'www.ism.ci',
    //         email: 'info@ism.ci',
    //         description: 'Institut de formation en gestion et commerce.',
    //         founded: '1998',
    //         tauxInsertion: 'Bonne',
    //         fraisAnnuels: '300 000 FCFA',
    //         tauxReussiteExamens: 1,
    //     },
    //     {
    //         statut: 'Public',
    //         name: 'ESATIC',
    //         note: 5,
    //         ville: 'Abidjan-Treichville',
    //         completed: false,
    //         priority: 1,
    //         dueDate: null,
    //         notes: '',
    //         tags: [],
    //         type: 'École spécialisée',
    //         category: 'Technologie et communication',
    //         image: 'assets/images/avatars/female-14.jpg',
    //         address: '04 BP 003 Abidjan',
    //         phone: '+225 21 26 78 90',
    //         website: 'www.esatic.ci',
    //         email: 'admissions@esatic.ci',
    //         description: 'École supérieure axée sur les technologies de l’information.',
    //         founded: '1985',
    //         tauxInsertion: 'Excellente',
    //         fraisAnnuels: '180 000 FCFA',
    //         tauxReussiteExamens: 1,
    //     },
    // ];
    constructor(
        private _formBuilder: FormBuilder,
        private globalServive: GlobalService
    ) {

    }
    ngOnInit(): void {
        this.etablissements = this.globalServive.etablissements


        this.taskForm = this._formBuilder.group({
            title: [''],
            completed: [false],
            dueDate: [null],
            tauxInsertion: ['']
        });
    }
    openDetails(item: any): void {
        this.selectedEtablissement = item;
        this.sidebarOpened = true;
        this.taskForm.patchValue({
            title: item.name,
            completed: item.completed,
            dueDate: item.dueDate,
            tauxInsertion: item.tauxInsertion
        });
    }

    closeSidebar(): void {
        this.sidebarOpened = false;
    }

    // toggleCompleted(): void {
    //     const completed = !this.taskForm.get('completed').value;
    //     this.taskForm.get('completed').setValue(completed);
    //     if (this.selectedEtablissement) {
    //         this.selectedEtablissement.completed = completed;
    //     }
    // }

    // saveForm(): void {
    //     if (this.selectedEtablissement) {
    //         this.selectedEtablissement.name = this.taskForm.get('title').value;
    //         this.selectedEtablissement.completed = this.taskForm.get('completed').value;
    //         this.selectedEtablissement.dueDate = this.taskForm.get('dueDate').value;
    //         this.selectedEtablissement.tauxInsertion = this.taskForm.get('tauxInsertion').value;
    //         this.sidebarOpened = false;
    //     }
    // }
}

