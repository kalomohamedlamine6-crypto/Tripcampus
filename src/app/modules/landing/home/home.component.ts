import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { atoutsAccueil, filieresPorteuses, statistiquesAccueil } from 'app/data/donnees-provisoires';
import { ComparateurComponent } from './Comparateur/comparateur.component';
import { QuizComponent } from './Quiz/quiz.component';

@Component({
    selector: 'landing-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    readonly stats = statistiquesAccueil;
    readonly features = atoutsAccueil;
    readonly filieres = filieresPorteuses;

    constructor(private _dialog: MatDialog)
    {
    }

    openQuiz(): void
    {
        this._dialog.open(QuizComponent, {
            width: '600px',
            maxWidth: '95vw',
            panelClass: 'quiz-modal-panel'
        });
    }

    openComparateur(): void
    {
        this._dialog.open(ComparateurComponent, {
            width: '600px',
            maxWidth: '95vw',
            panelClass: 'comparateur-modal-panel'
        });
    }
}
