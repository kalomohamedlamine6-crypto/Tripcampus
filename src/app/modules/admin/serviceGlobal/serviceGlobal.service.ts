import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ville, Etablissement, Filiere, NiveauDiplome, Formation, Propose, Actualite, QuestionQuiz, OptionReponse } from '../../../core/models';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public villes: Ville[] = [
        { id: 'v1', nom: 'Abidjan-Cocody' },
        { id: 'v2', nom: 'Abidjan-Treichville' }
    ];

    public etablissements: Etablissement[] = [
        {
            id: 'e1',
            nom: 'Universit� Virtuelle de C�te d�Ivoire',
            villeId: 'v1',
            statut: 'Public',
            type: 'Universitaire',
            categorie: 'Universit�',
            image: 'assets/images/avatars/avg-stiftung-nicole-berkovych-projektleiterin-721x1024.jpeg',
            adresse: '01 BP 000 Abidjan',
            telephone: '+225 21 23 45 67',
            website: 'www.uvi.ci',
            email: 'contact@uvi.ci',
            description: 'Universit� sp�cialis�e dans l�enseignement et la recherche � distance.',
            dateFondation: 2012,
            noteMoyenne: 4,
            tauxInsertion: 73
        },
        {
            id: 'e2',
            nom: 'Institut Sup�rieur de Management',
            villeId: 'v1',
            statut: 'Priv�',
            type: 'Grande �cole',
            categorie: '�cole de Management',
            image: 'assets/images/avatars/brian-hughes.jpg',
            adresse: '02 BP 001 Abidjan',
            telephone: '+225 21 24 56 78',
            website: 'www.ism.ci',
            email: 'info@ism.ci',
            description: 'Institut de formation en gestion et commerce.',
            dateFondation: 1998,
            noteMoyenne: 3,
            tauxInsertion: 70
        },
        {
            id: 'e3',
            nom: 'ESATIC',
            villeId: 'v2',
            statut: 'Public',
            type: '�cole sp�cialis�e',
            categorie: 'Technologie et communication',
            image: 'assets/images/avatars/female-14.jpg',
            adresse: '04 BP 003 Abidjan',
            telephone: '+225 21 26 78 90',
            website: 'www.esatic.ci',
            email: 'admissions@esatic.ci',
            description: '�cole sup�rieure ax�e sur les technologies de l�information.',
            dateFondation: 1985,
            noteMoyenne: 5,
            tauxInsertion: 97.5
        }
    ];

    public filieres: Filiere[] = [
        { id: 'f1', nom: 'Informatique', description: 'D�veloppement et R�seaux' },
        { id: 'f2', nom: 'Gestion', description: 'Management et Finance' }
    ];

    public niveaux: NiveauDiplome[] = [
        { id: 'n1', libelle: 'Licence' },
        { id: 'n2', libelle: 'Master' }
    ];

    public formations: Formation[] = [
        { id: 'fo1', nom: 'G�nie Logiciel', filiereId: 'f1', niveauDiplomeId: 'n1' },
        { id: 'fo2', nom: 'Cybers�curit�', filiereId: 'f1', niveauDiplomeId: 'n2' },
        { id: 'fo3', nom: 'MBA Management', filiereId: 'f2', niveauDiplomeId: 'n2' }
    ];

    public proposes: Propose[] = [
        { id: 'p1', etablissementId: 'e1', formationId: 'fo1', fraisAnnuels: 250000, tauxReussite: 54 },
        { id: 'p2', etablissementId: 'e3', formationId: 'fo1', fraisAnnuels: 180000, tauxReussite: 97 },
        { id: 'p3', etablissementId: 'e3', formationId: 'fo2', fraisAnnuels: 200000, tauxReussite: 92 },
        { id: 'p4', etablissementId: 'e2', formationId: 'fo3', fraisAnnuels: 300000, tauxReussite: 70 }
    ];

    private actualites: Actualite[] = [
        { id: 'a1', titre: 'Rentr�e 2026', contenu: 'Les inscriptions sont ouvertes', datePublication: new Date(), image: 'assets/images/news1.jpg' }
    ];

    private quizQuestions: QuestionQuiz[] = [
        { id: 'q1', question: 'Quelle est la capitale de la CI ?', points: 10 }
    ];

    private quizOptions: OptionReponse[] = [
        { id: 'o1', questionId: 'q1', texte: 'Yamoussoukro', estCorrecte: true },
        { id: 'o2', questionId: 'q1', texte: 'Abidjan', estCorrecte: false }
    ];

    getEtablissements(): Observable<Etablissement[]> {
        return of(this.etablissements);
    }

    getVilles(): Observable<Ville[]> {
        return of(this.villes);
    }

    getFormationsByEtablissement(etablissementId: string): Observable<any[]> {
        const filteredProposes = this.proposes.filter(p => p.etablissementId === etablissementId);
        const result = filteredProposes.map(p => {
            const formation = this.formations.find(f => f.id === p.formationId);
            return { ...p, ...formation };
        });
        return of(result);
    }

    getProposeDetails(proposeId: string): Observable<Propose | undefined> {
        return of(this.proposes.find(p => p.id === proposeId));
    }

    getActualites(): Observable<Actualite[]> {
        return of(this.actualites);
    }

    getQuiz(): Observable<{ questions: QuestionQuiz[], options: OptionReponse[] }> {
        return of({ questions: this.quizQuestions, options: this.quizOptions });
    }
}

