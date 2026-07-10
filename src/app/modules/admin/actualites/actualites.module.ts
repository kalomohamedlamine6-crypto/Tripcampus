import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Route, RouterModule } from '@angular/router';
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
        CommonModule,
        RouterModule.forChild(actualitesRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        ScrollingModule
    ]
})
export class ActualitesModule
{
}
