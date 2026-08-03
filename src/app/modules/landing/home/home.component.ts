import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuizComponent } from './Quiz/quiz.component';
import { ComparateurComponent } from './Comparateur/comparateur.component';

@Component({
    selector: 'landing-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent {

    tagChap: { label: string; icon: string; screen: string }[] = [
        { label: 'Comparer', icon: 'heroicons_solid:chart-bar', screen: 'compare' },
        { label: 'Quiz d\'Or', icon: 'heroicons_solid:question-mark-circle', screen: 'quiz' }
    ];

    stats: { value: string; label: string }[] = [
        { value: '120+', label: 'Établissements' },
        { value: '500+', label: 'Formations' },
        { value: 'Infos', label: 'Vérifiées' }
    ];

    features: { icon: string; title: string; description: string }[] = [
        {
            icon: 'heroicons_solid:adjustments',
            title: 'Comparateur d\'écoles',
            description: 'Comparez les diplômes, les statistiques, et les frais des formations de +120 établissements'
        },
        {
            icon: 'heroicons_solid:support',
            title: 'IA d\'orientation',
            description: 'Obtenez des recommandations personnalisées'
        },
        {
            icon: 'heroicons_solid:trending-up',
            title: 'Taux d\'insertion',
            description: 'Accédez aux données d\'insertion professionnelle pour chaque formation'
        }
    ];

    filieres: { label: string; taux: string; description: string; icon: string; badgeColor: string }[] = [
        {
            label: 'Technologies de l\'information',
            taux: '92%',
            description: 'Développement, cybersécurité et transformation digitale',
            icon: 'heroicons_solid:chip',
            badgeColor: 'bg-blue-50 border-blue-200 text-blue-700'
        },
        {
            label: 'Finance & Banque',
            taux: '80%',
            description: 'Expertise comptable, gestion d\'actifs et services financiers',
            icon: 'heroicons_solid:trending-up',
            badgeColor: 'bg-green-50 border-green-200 text-green-700'
        },
        {
            label: 'Energie & Ressource',
            taux: '85%',
            description: 'Secteur pétrolier, énergies renouvelables et exploitation minière',
            icon: 'heroicons_solid:lightning-bolt',
            badgeColor: 'bg-orange-50 border-orange-200 text-orange-700'
        },
        {
            label: 'Agronomie',
            taux: '70%',
            description: 'Production agricole, valorisation et export des produits',
            icon: 'heroicons_solid:support',
            badgeColor: 'bg-accent-50 border-accent-200 text-accent-700'
        },
        {
            label: 'Construction & BTP',
            taux: '82%',
            description: 'Ingénierie civile, architecture et gestion de projets',
            icon: 'heroicons_solid:library',
            badgeColor: 'bg-amber-50 border-amber-200 text-amber-700'
        },
        {
            label: 'Santé & Bien-être',
            taux: '87%',
            description: 'Médecine, pharmacie, infirmerie et services de santé',
            icon: 'heroicons_solid:heart',
            badgeColor: 'bg-red-50 border-red-200 text-red-700'
        }
    ];

    constructor(private _dialog: MatDialog) {}

    openQuiz(): void {
        this._dialog.open(QuizComponent, {
            width: '600px',
            maxWidth: '95vw',
            panelClass: 'quiz-modal-panel'
        });
      }

      openComparateur(): void {
        this._dialog.open(ComparateurComponent, {
            width: '600px',
            maxWidth: '95vw',
            panelClass: 'comparateur-modal-panel'
        });
      }
}





// ecoleSelectionnee = {
//   nom: "PIGIER",
//   ville: "Abidjan",
//   noteGlobale: 4.5,
//   criteres: [
//     { icon: "domain", label: "Infrastructures", note: 8.0 },
//     { icon: "supervisor_account", label: "Administration", note: 6.0 },
//     { icon: "sentiment_satisfied", label: "Ambiance", note: 6.0 },
//     { icon: "business_center", label: "Insertion Professionnelle", note: 9.0 },
//     { icon: "hotel_class", label: "Qualité/Prix", note: 9.0 },
//   ]};


    // selectedTabIndex: number = 0;

    // constructor(private _router: Router) {}

    // goToSignUp(): void {
    //     console.log('Bouton Inscription cliqué !');
    //     this._router.navigate(['/sign-up']).then(success => {
    //         console.log('Navigation réussie ?', success);
    //     }).catch(err => {
    //         console.error('Erreur navigation:', err);
    //     });
    // }

    // goToSignIn(): void {
    //     console.log('Bouton Connexion cliqué !');
    //     this._router.navigate(['/sign-in']).then(success => {
    //         console.log('Navigation réussie ?', success);
    //     }).catch(err => {
    //         console.error('Erreur navigation:', err);
    //     });
    // }
