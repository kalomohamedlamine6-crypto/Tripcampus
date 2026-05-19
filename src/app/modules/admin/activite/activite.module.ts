import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ActiviteComponent } from 'app/modules/admin/activite/activite.component';

const activiteRoutes: Route[] = [
    {
        path     : '',
        component: ActiviteComponent
    }
];

@NgModule({
    declarations: [
        ActiviteComponent
    ],
    imports     : [
        RouterModule.forChild(activiteRoutes)
    ]
})
export class ActiviteModule
{
}
