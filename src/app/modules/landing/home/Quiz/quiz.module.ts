import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { QuizComponent } from './quiz.component';

const routes: Route[] = [
    {
        path: '',
        component: QuizComponent
    }
];

@NgModule({
    declarations: [QuizComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatSelectModule,
        MatStepperModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class QuizModule
{
}
