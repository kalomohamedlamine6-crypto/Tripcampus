import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Route, RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { TranslocoModule } from '@ngneat/transloco';
import { FormationFiliereComponent } from 'app/modules/admin/formation-filiere/formation-filiere.component';
import { SharedModule } from 'app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

const FormationFiliereRoutes: Route[] = [
    {
        path: '',
        component: FormationFiliereComponent
    }
];

@NgModule({
    declarations: [
        FormationFiliereComponent,
    ],
    imports: [
        RouterModule.forChild(FormationFiliereRoutes),
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
        MatCardModule, MatButtonModule,
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
export class FormationFiliereModule {
}
