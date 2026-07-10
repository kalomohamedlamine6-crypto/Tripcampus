import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { QuizComponent } from './Quiz/quiz.component';

@Component({
    selector: 'landing-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent {

TagChap: { label: string; icon: string; screen: string }[] = [
  { label: "Comparer", icon: "heroicons_solid:chart-bar", screen: "compare"},
  { label: "Quiz d'Or", icon: "heroicons_solid:question-mark-circle", screen: "quiz"},
];

Stats: { value: string; label: string }[] = [
  { value: "120+", label: "Établissements" },
  { value: "500+", label: "Formations" },
  { value: "Infos", label: "Vérifiées" },
];

Features: { icon: string; title: string; description: string }[] = [
  { icon: "heroicons_solid:adjustments", title: "Comparateur d'écoles", description: "Comparez les diplômes, les statistiques, et les frais des formations de +120 établissements" },
  { icon: "heroicons_solid:support", title: "IA d'orientation", description: "Obtenez des recommandations personnalisées" },
  { icon: "heroicons_solid:trending-up", title: "Taux d'insertion", description: "Accédez aux données d'insertion professionnelle pour chaque formation" },
];

Filieres: { label: string; taux: string; description: string; icon: string }[] = [
  { label: "Informatique", taux: "+75%", description: " Domaine: Numérique & Technologie", icon: "heroicons_solid:chip" },
  { label: "Marketing", taux: "+65%", description: "Domaine: Management, Gestion et Commerce", icon: "heroicons_solid:shopping-cart" },
  { label: "Finance", taux: "+65%", description: "Domaine: Management, Gestion et Commerce", icon: "heroicons_solid:cash" },
  { label: "Génie Civil et BTP", taux: "+70%", description: "Domaine: Ingénierie et métiers techniques", icon: "heroicons_solid:office-building" },
]
constructor(private _dialog: MatDialog) {}

    openQuiz(): void {
        this._dialog.open(QuizComponent, {
            width: '600px',
            maxWidth: '95vw',
            panelClass: 'quiz-modal-panel'
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
