import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';


@Component({
    selector: 'modern-layout',
    templateUrl: './modern.component.html',
    styleUrls: ['./modern.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModernLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean = false;
    isHomeRoute: boolean = false;
    navigation: Navigation;
    currentUrl: string = '';
    modules = [
        { label: 'Accueil', route: '/home' },
        { label: 'Actualités', route: '/actualites' },
        { label: 'Découvrir', route: '/decouvrir' },
        { label: 'Formation-Filières', route: '/formation-filiere' }
    ];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService
    ) { }

    get currentYear(): number {
        return new Date().getFullYear();
    }

    ngOnInit(): void {
        // Navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });

        // Détection de la route Home
        this.currentUrl = this._router.url;

        this._router.events
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    const url = event.urlAfterRedirects;
                    this.currentUrl = url;
                    this.isHomeRoute = url === '/home' ||
                        url === '/' ||
                        url.startsWith('/home');
                }
            });

        // Media watcher
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    isActiveModule(route: string): boolean {
        return this.currentUrl === route || this.currentUrl.startsWith(route + '/');
    }

    toggleNavigation(name: string): void {
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);
        if (navigation) {
            navigation.toggle();
        }
    }
    // Méthodes navigation
    // goToSignUp(): void {
    //     console.log('goToSignUp appelé');
    //     this._router.navigate(['/sign-up'], { skipLocationChange: false }).then(result => {
    //         console.log('Navigation to sign-up success:', result);
    //     }).catch(err => console.error(err));
    // }

    // goToSignIn(): void {
    //     console.log('goToSignIn appelé');
    //     this._router.navigate(['/sign-in'], { skipLocationChange: false }).then(result => {
    //         console.log('Navigation to sign-in success:', result);
    //     }).catch(err => console.error(err));
    // }


}
