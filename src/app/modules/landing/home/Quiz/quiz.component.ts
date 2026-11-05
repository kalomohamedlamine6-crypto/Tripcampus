import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
    Etablissement,
    EtapeQuiz,
    Filiere,
    Formation,
    NiveauFormation,
    OffreFormationEtablissement,
    OptionQuestionQuiz,
    QuestionQuiz,
    questionsQuizProvisoires,
    etablissementsProvisoires,
    filieresProvisoires,
    formationsProvisoires,
    offresFormationEtablissement
} from 'app/data/donnees-provisoires';

interface OffreFormationResultat
{
    etablissement: Etablissement;
    offre: OffreFormationEtablissement;
}

interface FormationResultat
{
    formation: Formation;
    offres: OffreFormationResultat[];
}

interface NiveauResultat
{
    niveau: NiveauFormation;
    formations: FormationResultat[];
}

interface SuggestionFiliere
{
    filiere: Filiere;
    score: number;
    pourcentage: number;
    explication: string[];
    niveaux: NiveauResultat[];
}

@Component({
    selector: 'Quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit
{
    quizForm!: FormGroup;
    afficherResultat = false;
    etapeCourante = 0;
    readonly questions = questionsQuizProvisoires;
    readonly niveaux: NiveauFormation[] = ['BAC+2', 'BAC+3', 'BAC+5'];

    constructor(private _formBuilder: FormBuilder)
    {
    }

    ngOnInit(): void
    {
        this.quizForm = this._formBuilder.group({
            centres: this._creerGroupe('centres'),
            competences: this._creerGroupe('competences'),
            preferences: this._creerGroupe('preferences')
        });
    }

    get questionsCentres(): QuestionQuiz[]
    {
        return this.questions.filter(question => question.etape === 'centres');
    }

    get questionsCompetences(): QuestionQuiz[]
    {
        return this.questions.filter(question => question.etape === 'competences');
    }

    get questionsPreferences(): QuestionQuiz[]
    {
        return this.questions.filter(question => question.etape === 'preferences');
    }

    get suggestions(): SuggestionFiliere[]
    {
        if (!this.quizForm || !this.quizForm.valid)
        {
            return [];
        }

        const questionsDePonderation = this.questions.filter(question => question.id !== 'budget');
        const reponses = questionsDePonderation.map(question => {
            const valeur = this.quizForm.get(`${question.etape}.${question.id}`)?.value;
            const option = question.options.find(item => item.valeur === valeur);

            return option ? { question, option } : null;
        }).filter((reponse): reponse is { question: QuestionQuiz; option: OptionQuestionQuiz } =>
            reponse !== null
        );
        const valeurBudget = this.quizForm.get('preferences.budget')?.value as string;
        const etablissementsParId = new Map<string, Etablissement>();
        etablissementsProvisoires.forEach(etablissement =>
            etablissementsParId.set(etablissement.id, etablissement)
        );

        return filieresProvisoires.map(filiere => {
            const poidsMaximum = questionsDePonderation.reduce((total, question) =>
                total + Math.max(...question.options.map(option => option.poidsParFiliere[filiere.id] || 0)), 0
            );
            const reponsesContributives = reponses.map(({ option }) => ({
                texte: option.libelle,
                poids: option.poidsParFiliere[filiere.id] || 0
            })).filter(reponse => reponse.poids > 0)
                .sort((a, b) => b.poids - a.poids);
            const score = reponses.reduce((total, { option }) =>
                total + (option.poidsParFiliere[filiere.id] || 0), 0
            );
            const formations = formationsProvisoires.filter(formation => formation.filiereId === filiere.id);
            const niveaux = this.niveaux.map(niveau => ({
                niveau,
                formations: formations.filter(formation => formation.niveau === niveau)
                    .map(formation => ({
                        formation,
                        offres: this._offresFormation(formation, valeurBudget, etablissementsParId)
                    }))
            })).filter(groupe => groupe.formations.length > 0);

            return {
                filiere,
                score,
                pourcentage: poidsMaximum ? Math.round(score / poidsMaximum * 100) : 0,
                explication: reponsesContributives.slice(0, 3).map(reponse => reponse.texte),
                niveaux
            };
        }).sort((a, b) => b.score - a.score || a.filiere.nom.localeCompare(b.filiere.nom, 'fr'))
            .slice(0, 3);
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
        this.etapeCourante = 0;
        this.quizForm.reset();
    }

    onEtapeChange(index: number): void
    {
        this.etapeCourante = index;
    }

    trackByQuestion(index: number, question: { id: string }): string
    {
        return question.id;
    }

    trackByOption(index: number, option: OptionQuestionQuiz): string
    {
        return option.valeur;
    }

    trackBySuggestion(index: number, suggestion: SuggestionFiliere): string
    {
        return suggestion.filiere.id;
    }

    trackByNiveau(index: number, niveau: NiveauResultat): string
    {
        return niveau.niveau;
    }

    trackByFormation(index: number, resultat: FormationResultat): string
    {
        return resultat.formation.id;
    }

    trackByOffre(index: number, resultat: OffreFormationResultat): string
    {
        return `${resultat.offre.etablissementId}:${resultat.offre.formationId}`;
    }

    private _creerGroupe(etape: EtapeQuiz): FormGroup
    {
        const controles: { [key: string]: FormControl } = {};
        this.questions.filter(question => question.etape === etape)
            .forEach(question => {
                controles[question.id] = this._formBuilder.control('', Validators.required);
            });

        return this._formBuilder.group(controles);
    }

    private _correspondAuBudget(
        offre: OffreFormationEtablissement,
        etablissement: Etablissement,
        budget: string
    ): boolean
    {
        if (budget === 'public')
        {
            return etablissement.statut === 'public';
        }

        if (budget === 'accessible')
        {
            return offre.fraisScolariteAnnuelsFictifs <= 500000;
        }

        return true;
    }

    private _offresFormation(
        formation: Formation,
        budget: string,
        etablissementsParId: Map<string, Etablissement>
    ): OffreFormationResultat[]
    {
        const resultats: OffreFormationResultat[] = [];

        offresFormationEtablissement
            .filter(offre => offre.formationId === formation.id)
            .forEach(offre => {
                const etablissement = etablissementsParId.get(offre.etablissementId);

                if (etablissement && this._correspondAuBudget(offre, etablissement, budget))
                {
                    resultats.push({ offre, etablissement });
                }
            });

        return resultats;
    }
}
