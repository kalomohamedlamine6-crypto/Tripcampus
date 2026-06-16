import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommunauteComponent } from 'app/modules/admin/communaute/communaute.component';

const communauteRoutes: Route[] = [
    {
        path     : '',
        component: CommunauteComponent
    }
];

@NgModule({
    declarations: [
        CommunauteComponent
    ],
    imports     : [
        RouterModule.forChild(communauteRoutes)
    ]
})
export class CommunauteModule
{
}
