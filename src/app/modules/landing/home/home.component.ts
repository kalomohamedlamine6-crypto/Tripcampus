import { Component, ViewEncapsulation } from '@angular/core';
import { atoutsAccueil, filieresPorteuses, statistiquesAccueil } from 'app/data/donnees-provisoires';

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

    trackByIndex(index: number): number
    {
        return index;
    }

    trackById(index: number, item: { id: string }): string
    {
        return item.id;
    }
}
