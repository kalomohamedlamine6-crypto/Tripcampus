import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { EspaceComponent } from 'app/modules/admin/espace/espace.component';

const espaceRoutes: Route[] = [
    {
        path     : '',
        component: EspaceComponent
    }
];

@NgModule({
    declarations: [
        EspaceComponent
    ],
    imports     : [
        RouterModule.forChild(espaceRoutes),
        MatIconModule,
    ]
})
export class EspaceModule
{
}
