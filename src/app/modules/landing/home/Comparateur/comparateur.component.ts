import { Component } from '@angular/core';

@Component({
  selector: 'comparateur',
  templateUrl: './comparateur.component.html',
    
})
export class ComparateurComponent {
 
     etablissements = [
        {
            statut: 'Public',
            name: 'Université Virtuelle de Côte d’Ivoire',
            note: 4,
            Ville : 'Abidjan-Cocody',
            completed: false,
            priority: 1,
            dueDate: null,
            notes: '',
            tags: [],
            type: 'Universitaire',
            category: 'Université',
            image: 'assets/images/avatars/avg-stiftung-nicole-berkovych-projektleiterin-721x1024.jpeg',
            address: '01 BP 000 Abidjan',
            phone: '+225 21 23 45 67',
            website: 'www.uvi.ci',
            email: 'contact@uvi.ci',
            description: 'Université spécialisée dans l’enseignement et la recherche à distance, offrant des programmes innovants et des services modernes.',
            founded: '2012'
        },
        {
            statut: 'Privé',
            name: 'Institut Supérieur de Management',
            note: 3,
            Ville : 'Abidjan-Cocody',
            completed: false,
            priority: 1,
            dueDate: null,
            notes: '',
            tags: [],
            type: 'Grande école',
            category: 'École de Management',
            image: 'assets/images/avatars/brian-hughes.jpg',
            address: '02 BP 001 Abidjan',
            phone: '+225 21 24 56 78',
            website: 'www.ism.ci',
            email: 'info@ism.ci',
            description: 'Institut de formation en gestion et commerce avec un fort accent sur l’entrepreneuriat et l’innovation.',
            founded: '1998'
        },
        {
            statut: 'Privé',
            name: 'École Polytechnique de Côte d’Ivoire',
            note: 3,
            Ville: 'Abidjan-Plateau',
            completed: false,
            priority: 1,
            dueDate: null,
            notes: '',
            tags: [],
            type: 'Grande école',
            category: 'Ingénierie',
            image: 'assets/images/avatars/female-01.jpg',
            address: '03 BP 002 Abidjan',
            phone: '+225 21 25 67 89',
            website: 'www.epci.ci',
            email: 'contact@epci.ci',
            description: 'Établissement d’enseignement supérieur centré sur les sciences et technologies appliquées.',
            founded: '2005'
        },
        {
            statut: 'Public',
            name: 'ESATIC',
            note: 5,
            Ville: 'Abidjan-Treichville',
            completed: false,
            priority: 1,
            dueDate: null,
            notes: '',
            tags: [],
            type: 'Ecole spécialisée',
            category: 'Technologie et communication',
            image: 'assets/images/avatars/female-14.jpg',
            address: '04 BP 003 Abidjan',
            phone: '+225 21 26 78 90',
            website: 'www.esatic.ci',
            email: 'admissions@esatic.ci',
            description: 'École supérieure axée sur les technologies de l’information, les télécommunications et les médias.',
            founded: '1985'
        },
    ];

}