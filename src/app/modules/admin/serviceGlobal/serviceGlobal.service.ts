import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface Etablissement {
    name: string;
    ville: string;
    statut: string;
    type: string;

    // INFOS SUP POUR APERCU
    category: string;
    image: string;
    address: string;
    phone: string;
    website: string;
    email: string;
    description: string;
    founded: number;

    // A REVOIR
    completed: boolean;
    priority?: number;
    dueDate?: string | null;
    tags?: string[];

    // STATS CHIFFRES (SURTOUT POUR LES COMPARAISONS)
    fraisAnnuels: number;
    noteMoyenne: number | string;
    tauxInsertion: number;
    tauxReussiteExamens: number;
}

export type CriterionKey = 'noteMoyenne' | 'fraisAnnuels' | 'statut' | 'type' | 'tauxInsertion' | 'tauxReussiteExamens' ;

export interface CompareRow {
    key: CriterionKey;
    label: string;
}

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    ibra: Etablissement | undefined;

    constructor(private http: HttpClient) { }

    etablissements: Etablissement[] = [
        {
            statut: 'Public',
            name: 'Université Virtuelle de Côte d’Ivoire',
            noteMoyenne: 4,
            ville: 'Abidjan-Cocody',
            completed: false,
            priority: 1,
            dueDate: null,
            tags: [],
            type: 'Universitaire',
            category: 'Université',
            image: 'assets/images/avatars/avg-stiftung-nicole-berkovych-projektleiterin-721x1024.jpeg',
            address: '01 BP 000 Abidjan',
            phone: '+225 21 23 45 67',
            website: 'www.uvi.ci',
            email: 'contact@uvi.ci',
            description: 'Université spécialisée dans l’enseignement et la recherche à distance.',
            founded: 2012,
            tauxInsertion: 73,
            fraisAnnuels: 250000 ,
            tauxReussiteExamens: 54,
        },

        {
            statut: 'Privé',
            name: 'Institut Supérieur de Management',
            noteMoyenne: 3,
            ville: 'Abidjan-Cocody',
            completed: false,
            priority: 1,
            dueDate: null,
            tags: [],
            type: 'Grande école',
            category: 'École de Management',
            image: 'assets/images/avatars/brian-hughes.jpg',
            address: '02 BP 001 Abidjan',
            phone: '+225 21 24 56 78',
            website: 'www.ism.ci',
            email: 'info@ism.ci',
            description: 'Institut de formation en gestion et commerce.',
            founded: 1998,
            tauxInsertion: 70,
            fraisAnnuels: 300000 ,
            tauxReussiteExamens: 70,
        },
        {
            statut: 'Public',
            name: 'ESATIC',
            noteMoyenne: 5,
            ville: 'Abidjan-Treichville',
            completed: false,
            priority: 1,
            dueDate: null,
            tags: [],
            type: 'École spécialisée',
            category: 'Technologie et communication',
            image: 'assets/images/avatars/female-14.jpg',
            address: '04 BP 003 Abidjan',
            phone: '+225 21 26 78 90',
            website: 'www.esatic.ci',
            email: 'admissions@esatic.ci',
            description: 'École supérieure axée sur les technologies de l’information.',
            founded: 1985,
            tauxInsertion: 97.5 ,
            fraisAnnuels: 180000 ,
            tauxReussiteExamens: 97,
        },
    ];
}
