import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { EspaceComponent } from 'app/modules/admin/espace/espace.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FuseCardModule } from '@fuse/components/card';


const espaceRoutes: Route[] = [
    {
        path     : '',
        component: EspaceComponent,
    }
];

@NgModule({
    declarations: [
        EspaceComponent,
    ],
        
         
    imports     : [
        RouterModule.forChild(espaceRoutes),
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        CommonModule,
        MatCardModule,
        FuseCardModule,
    ]
})
export class EspaceModule
{
}

