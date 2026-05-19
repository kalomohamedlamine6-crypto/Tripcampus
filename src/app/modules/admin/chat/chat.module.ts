import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChatComponent } from 'app/modules/admin/chat/chat.component';

const chatRoutes: Route[] = [
    {
        path     : '',
        component: ChatComponent
    }
];

@NgModule({
    declarations: [
        ChatComponent
    ],
    imports     : [
        RouterModule.forChild(chatRoutes)
    ]
})
export class chatModule
{
}
