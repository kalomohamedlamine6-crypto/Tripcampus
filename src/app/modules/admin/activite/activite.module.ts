import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

const activiteRoutes: Route[] = [
    {
        path     : '',
         
    }
];

@NgModule({
    declarations: [
        
    ],
    imports     : [
        RouterModule.forChild(activiteRoutes)
    ]
})
export class ActiviteModule
{
}
