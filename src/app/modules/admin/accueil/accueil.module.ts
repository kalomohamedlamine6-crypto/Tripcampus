import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card/card.module';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key/find-by-key.module';
import { AccueilComponent } from 'app/modules/admin/accueil/accueil.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';


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
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        // MatSelectModule,
        // MatSidenavModule,
        // MatSlideToggleModule,
        MatTooltipModule,
        FuseFindByKeyPipeModule,
        SharedModule,
        // MatTabsModule
        MatCardModule,MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        // MatSidenavModule,
        // MatSortModule,
        // MatTableModule,
        // MatTabsModule,
        NgApexchartsModule,
        TranslocoModule,
        MatListModule,
        MatTabsModule,

    ]
})
export class AccueilModule
{
}
