import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { DecouvrirComponent } from 'app/modules/admin/decouvrir/decouvrir.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FuseCardModule } from '@fuse/components/card';


const decouvrirRoutes: Route[] = [
    {
        path     : '',
        component: DecouvrirComponent,
    }
];

@NgModule({
    declarations: [
        DecouvrirComponent,
    ],
        
         
    imports     : [
        RouterModule.forChild(decouvrirRoutes),
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        CommonModule,
        MatCardModule,
        FuseCardModule,
    ]
})
export class DecouvrirModule
{
}

