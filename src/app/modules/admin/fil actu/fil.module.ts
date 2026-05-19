import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FilComponent } from 'app/modules/admin/fil actu/fil.component';

const filRoutes: Route[] = [
    {
        path     : '',
        component: FilComponent
    }
];

@NgModule({
    declarations: [
        FilComponent
    ],
    imports     : [
        RouterModule.forChild(filRoutes)
    ]
})
export class FilModule
{
}
