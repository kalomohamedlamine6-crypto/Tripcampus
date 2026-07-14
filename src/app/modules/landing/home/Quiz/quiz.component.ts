import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'Quiz',
    templateUrl: './quiz.component.html',
    
})  
export class QuizComponent implements OnInit {
    
    horizontalStepperForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _dialogRef: MatDialogRef<QuizComponent>  
    ) {}

    ngOnInit(): void {
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                country: ['', Validators.required],
                language: ['', Validators.required]
            }),
            step2: this._formBuilder.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                userName: ['', Validators.required],
                about: ['']
            }),
            step3: this._formBuilder.group({
                byEmail: this._formBuilder.group({
                    companyNews: [false],
                    featuredProducts: [false],
                    messages: [false]
                }),
                pushNotifications: ['everything']
            })
        });
    }

    close(): void {
        this._dialogRef.close();
    }
}