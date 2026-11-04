import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ComparateurComponent } from './comparateur.component';

const routes: Route[] = [
    {
        path: '',
        component: ComparateurComponent
    }
];

@NgModule({
    declarations: [ComparateurComponent],
    imports: [
        CommonModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ComparateurModule
{
}
