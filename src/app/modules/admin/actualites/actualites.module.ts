import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ActualitesComponent } from './actualites.component';
import { ActualiteDetailsComponent } from './actualite-details.component';

const actualitesRoutes: Route[] = [
    {
        path: ':id',
        component: ActualiteDetailsComponent
    },
    {
        path: '',
        pathMatch: 'full',
        component: ActualitesComponent
    }
];

@NgModule({
    declarations: [
        ActualitesComponent,
        ActualiteDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(actualitesRoutes),
    ]
})
export class ActualitesModule
{
}
