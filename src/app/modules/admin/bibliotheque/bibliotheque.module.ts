import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BibliothequeComponent } from 'app/modules/admin/bibliotheque/bibliotheque.component';

const bibliothequeRoutes: Route[] = [
    {
        path     : '',
        component: BibliothequeComponent
    }
];

@NgModule({
    declarations: [
        BibliothequeComponent
    ],
    imports     : [
        RouterModule.forChild(bibliothequeRoutes)
    ]
})
export class BibliothequeModule
{
}
