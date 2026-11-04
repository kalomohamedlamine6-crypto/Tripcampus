import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'Quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit
{
    quizForm!: FormGroup;
    afficherResultat = false;

    readonly centresInteret = [
        'Technologies et numérique',
        'Gestion et entrepreneuriat',
        'Agriculture et environnement',
        'Industrie et énergie',
        'Santé et accompagnement'
    ];

    readonly competences = [
        'Résoudre des problèmes',
        'Organiser et gérer',
        'Créer et concevoir',
        'Communiquer et accompagner',
        'Analyser des informations'
    ];

    constructor(private _formBuilder: FormBuilder)
    {
    }

    ngOnInit(): void
    {
        this.quizForm = this._formBuilder.group({
            centres: this._formBuilder.group({
                interets: [[], Validators.required]
            }),
            competences: this._formBuilder.group({
                pointsForts: [[], Validators.required]
            }),
            preferences: this._formBuilder.group({
                budget: ['', Validators.required],
                duree: ['', Validators.required],
                typeFiliere: ['', Validators.required]
            })
        });
    }

    terminer(): void
    {
        if (this.quizForm.valid)
        {
            this.afficherResultat = true;
        }
    }

    recommencer(): void
    {
        this.afficherResultat = false;
        this.quizForm.reset();
    }

    trackByIndex(index: number, item: string): string
    {
        return item;
    }
}
