import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ActualitesComponent } from './actualites.component';

const actualitesRoutes: Route[] = [
    {
        path     : '',
        component: ActualitesComponent
    }
];

@NgModule({
    declarations: [
        ActualitesComponent
    ],
    imports     : [
        RouterModule.forChild(actualitesRoutes),
        MatIconModule
    ]
})
export class ActualitesModule
{
}
