import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { DecouvrirComponent } from 'app/modules/admin/decouvrir/decouvrir.component';
import { MatButtonModule } from '@angular/material/button';

const decouvrirRoutes: Route[] = [
    {
        path     : '',
        component: DecouvrirComponent,
    }
];

@NgModule({
    declarations: [
        DecouvrirComponent
    ],
    imports     : [
        RouterModule.forChild(decouvrirRoutes),
        MatButtonModule,
        MatIconModule,
        CommonModule,
        FormsModule
    ]
})
export class DecouvrirModule
{
}
