import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

interface NewsArticle {
    id: string;
    icon: string;
    dateMonth: string;
    dateMonthFull: string;
    dateDay: string;
    title: string;
    summary: string;
    content: string;
}

@Component({
    selector: 'actualites',
    templateUrl: './actualites.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ActualitesComponent implements OnInit {

    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    currentNewsIndex: number = 0;


    newsList: NewsArticle[] = [
        {
            id: '1',
            icon: '📢',
            dateMonth: 'JUN',
            dateMonthFull: 'Juin',
            dateDay: '05',
            title: 'Inscriptions ouvertes à l\'ESATIC',
            summary: 'Les candidatures pour le cycle ingénieur sont ouvertes jusqu\'au 15 juillet.',
            content: `
                <p>Nous informons l'ensemble des candidats que les inscriptions pour le concours d'entrée au
                <strong>cycle ingénieur de l'ESATIC</strong> sont officiellement lancées.</p>
                <p>Les dossiers de candidature doivent être déposés complets avant la date limite fixée au
                <strong>15 juillet</strong>. Ne ratez pas cette opportunité d'intégrer une école d'excellence dans le
                domaine du numérique.</p>
            `
        },
        {
            id: '2',
            icon: '🎓',
            dateMonth: 'JUN',
            dateMonthFull: 'Juin',
            dateDay: '12',
            title: 'Nouvelle formation en Data Science',
            summary: 'Une nouvelle licence est désormais proposée au sein de l\'établissement.',
            content: `
                <p>Face aux nouveaux défis de l'intelligence artificielle, l'ESATIC ouvre sa toute nouvelle
                <strong>Licence en Data Science</strong>.</p>
                <p>Ce programme permettra aux étudiants d'acquérir de solides compétences en manipulation de données,
                statistiques avancées et Big Data.</p>
            `
        },
        {
            id: '3',
            icon: '💰',
            dateMonth: 'JUN',
            dateMonthFull: 'Juin',
            dateDay: '20',
            title: '20 bourses disponibles',
            summary: 'Programme d\'accompagnement destiné aux nouveaux bacheliers.',
            content: '<p>Grâce à nos partenaires du secteur privé, 20 bourses d\'études complètes seront allouées aux bacheliers les plus méritants ayant postulé cette année.</p>'
        },
        {
            id: '4',
            icon: '🏫',
            dateMonth: 'JUL',
            dateMonthFull: 'Juillet',
            dateDay: '14&15',
            title: 'Le salon de l\'orientation',
            summary: 'Rencontrez les responsables pédagogiques et découvrez nos locaux.',
            content: '<p>Venez nous rencontrer lors des journées portes ouvertes et du salon de l\'orientation qui se ' +
                'tiendront les 14 et 15 juillet dans l\'enceinte de l\'école.</p>'
        }
    ];

    ngOnInit(): void {
        this._checkScreenSize();
    }

    // Ferme le menu sur mobile après sélection
    selectNews(index: number): void {
        this.currentNewsIndex = index;
        if (this.drawerMode === 'over') {
            this.drawerOpened = false;
        }
    }

    nextNews(): void {
        if (this.currentNewsIndex < this.newsList.length - 1) {
            this.currentNewsIndex++;
        }
    }

    prevNews(): void {
        if (this.currentNewsIndex > 0) {
            this.currentNewsIndex--;
        }
    }

    trackByFn(index: number, item: NewsArticle): string {
        return item.id;
    }

    private _checkScreenSize(): void {
        if (window.innerWidth < 1024) {
            this.drawerMode = 'over';
            this.drawerOpened = false;
        } else {
            this.drawerMode = 'side';
            this.drawerOpened = true;
        }
    }
}
