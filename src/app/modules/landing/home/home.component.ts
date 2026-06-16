import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    constructor(private _router: Router)
    {
    }

    /**
     * Navigate to sign up page
     */
    goToSignUp(): void
    {
        this._router.navigate(['/sign-up']);
    }

    /**
     * Navigate to sign in page
     */
    goToSignIn(): void
    {
        this._router.navigate(['/sign-in']);
    }
}
