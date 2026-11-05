import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';


// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to home landing page
    {path: '', pathMatch : 'full', redirectTo: 'home'},


    // Redirect signed in user to '/accueil'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this  communautee.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'accueil'},


    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Public routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'modern'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
            {path: 'comparateur', loadChildren: () => import('app/modules/landing/home/Comparateur/comparateur.module').then(m => m.ComparateurModule)},
            {path: 'quiz', loadChildren: () => import('app/modules/landing/home/Quiz/quiz.module').then(m => m.QuizModule)},
            {path: 'accueil', loadChildren: () => import('app/modules/admin/accueil/accueil.module').then(m => m.AccueilModule)},
            {path: 'actualites', loadChildren: () => import('app/modules/admin/actualites/actualites.module').then(m => m.ActualitesModule)},
            {path: 'decouvrir', loadChildren: () => import('app/modules/admin/decouvrir/decouvrir.module').then(m => m.DecouvrirModule )},
            {path: 'filieres', loadChildren: () => import('app/modules/admin/filieres/filieres.module').then(m => m.FilieresModule)},
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

];
