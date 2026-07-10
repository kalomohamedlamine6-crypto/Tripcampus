import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { DecouvrirComponent } from 'app/modules/admin/decouvrir/decouvrir.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FuseCardModule } from '@fuse/components/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

const decouvrirRoutes: Route[] = [
    {
        path     : '',
        component: DecouvrirComponent,
    }
];

@NgModule({
    declarations: [
        DecouvrirComponent,
    ],
        
         
    imports     : [
        RouterModule.forChild(decouvrirRoutes),
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        CommonModule,
        MatCardModule,
        FuseCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatSortModule,
        MatDividerModule,
        MatMenuModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ]
})
export class DecouvrirModule
{
}

