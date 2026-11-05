import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { FilieresComponent } from './filieres.component';
import { FormationDetailsComponent } from './formation-details.component';

const filieresRoutes: Route[] = [
    {
        path: 'formation/:id',
        component: FormationDetailsComponent
    },
    {
        path: '',
        pathMatch: 'full',
        component: FilieresComponent
    }
];

@NgModule({
    declarations: [
        FilieresComponent,
        FormationDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(filieresRoutes),
        SharedModule
    ]
})
export class FilieresModule
{
}
