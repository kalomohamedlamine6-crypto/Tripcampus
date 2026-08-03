import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'formation-filiere',
    templateUrl: './formation-filiere.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FormationFiliereComponent {
    selectedFiliere: any = null;
    sidebarOpened = false;

    filieres = [
        {
            id: 1,
            title: 'BTS Informatique Développeur d’Application',
            category: 'Technologie',
            description: 'Formation pratique autour du développement logiciel, des bases de données et de la conception d’applications.',
            niveau: 'BTS',
            duree: '2 ans',
            debouches: ['Développeur web', 'Développeur mobile', 'Analyste logiciel'],
            competences: ['HTML/CSS/JS', 'Java/Spring', 'PHP/Laravel', 'SQL'],
            insertion: '+80% dans les entreprises de développement logiciel et services IT.',
            type: 'Professionnel'
        },
        {
            id: 2,
            title: 'Licence Réseau Informatique et Télécoms',
            category: 'Réseaux',
            description: 'Programme orienté administration de réseaux, sécurité informatique et télécommunications.',
            niveau: 'Licence',
            duree: '3 ans',
            debouches: ['Administrateur réseau', 'Technicien télécoms', 'Ingénieur support réseau'],
            competences: ['Cisco', 'IP', 'Sécurité', 'Cloud'],
            insertion: '+75% dans les entreprises de télécommunications et IT.',
            type: 'Académique'
        },
        {
            id: 3,
            title: 'Licence Informatique Génie Logiciel',
            category: 'Développement',
            description: 'Formation complète autour du cycle de vie des logiciels, architecture et qualité logicielle.',
            niveau: 'Licence',
            duree: '3 ans',
            debouches: ['Ingénieur logiciel', 'Chef de projet IT', 'Architecte applicatif'],
            competences: ['UML', 'Tests', 'Architecture', 'DevOps'],
            insertion: '+70% dans les entreprises technologiques.',
            type: 'Académique'
        },
        {
            id: 4,
            title: 'BTS Comptabilité et Gestion',
            category: 'Gestion',
            description: 'Formation axée sur la gestion financière, la comptabilité et l’analyse d’entreprise.',
            niveau: 'BTS',
            duree: '2 ans',
            debouches: ['Comptable', 'Assistant gestion', 'Analyste financier'],
            competences: ['Comptabilité', 'Fiscalité', 'Gestion'],
            insertion: '+65% dans les PME et grandes entreprises.',
            marge: '[65%-75%]',
            type: 'Professionnel'
        }
    ];

    openDetails(filiere: any): void {
        this.selectedFiliere = filiere;
        this.sidebarOpened = true;
    }

    closeSidebar(): void {
        this.sidebarOpened = false;
    }

    getInsertionIcon(value: string | undefined): string {
        const percentage = this.getInsertionPercentage(value);

        return percentage !== null && percentage >= 70 ? 'heroicons_solid:trending-up' : 'heroicons_solid:trending-down';
    }

    getInsertionColor(value: string | undefined): string {
        const percentage = this.getInsertionPercentage(value);

        if (percentage === null) {
            return 'text-gray-500';
        }

        return percentage >= 70 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
    }

    private getInsertionPercentage(value: string | undefined): number | null {
        if (!value) {
            return null;
        }

        const match = value.match(/([+-]?\d+(?:\.\d+)?)%/);

        return match ? parseFloat(match[1]) : null;
    }
}
