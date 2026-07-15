import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class globalService {

    ibra: {
        statut: string;
        name: string;
        note: number | string;
        ville: string;
        completed: boolean;
        priority?: number;
        dueDate?: string | null;
        notes?: string;
        tags?: string[];
        type: string;
        category: string;
        image: string;
        address: string;
        phone: string;
        website: string;
        email: string;
        description: string;
        founded: string;
        insertPro?: string;
        prixMoy?: string;
        stats?: number;
    } | undefined

    constructor(
        private http: HttpClient,

    ) { }

    etablissements : ibra[] = [
        {
            statut: 'Public',
            name: 'Université Virtuelle de Côte d’Ivoire',
            note: 4,
            ville: 'Abidjan-Cocody',
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
            description: 'Université spécialisée dans l’enseignement et la recherche à distance.',
            founded: '2012',
            insertPro: 'Très bonne',
            prixMoy: '250 000 FCFA',
            stats: 1,
        },
        {
            statut: 'Privé',
            name: 'Institut Supérieur de Management',
            note: 3,
            ville: 'Abidjan-Cocody',
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
            description: 'Institut de formation en gestion et commerce.',
            founded: '1998',
            insertPro: 'Bonne',
            prixMoy: '300 000 FCFA',
            stats: 1,
        },
        {
            statut: 'Public',
            name: 'ESATIC',
            note: 5,
            ville: 'Abidjan-Treichville',
            completed: false,
            priority: 1,
            dueDate: null,
            notes: '',
            tags: [],
            type: 'École spécialisée',
            category: 'Technologie et communication',
            image: 'assets/images/avatars/female-14.jpg',
            address: '04 BP 003 Abidjan',
            phone: '+225 21 26 78 90',
            website: 'www.esatic.ci',
            email: 'admissions@esatic.ci',
            description: 'École supérieure axée sur les technologies de l’information.',
            founded: '1985',
            insertPro: 'Excellente',
            prixMoy: '180 000 FCFA',
            stats: 1,
        },
    ];
}
