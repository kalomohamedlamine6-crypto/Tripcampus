import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card/card.module';
import { AccueilComponent } from 'app/modules/admin/accueil/accueil.component';
import { SharedModule } from 'app/shared/shared.module';


const accueilRoutes: Route[] = [
    {
        path     : '',
        component: AccueilComponent
    }
];

@NgModule({
    declarations: [
        AccueilComponent
    ],
    imports     : [
        RouterModule.forChild(accueilRoutes),
        FuseCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule,
        SharedModule
    ]
})
export class AccueilModule
{
}
