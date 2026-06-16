import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate
{
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _router: Router
    )
    {
    }

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        return this._authService.check()
            .pipe(
                map((authenticated) => {
                    if ( authenticated )
                    {
                        // User is authenticated, redirect to dashboard
                        return this._router.parseUrl('/accueil');
                    }
                    else
                    {
                        // User is not authenticated, redirect to home (landing)
                        return this._router.parseUrl('/home');
                    }
                })
            );
    }
}
