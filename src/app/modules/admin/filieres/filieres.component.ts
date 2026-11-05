import { Component, OnInit } from '@angular/core';
import {
    Filiere,
    Formation,
    NiveauFormation,
    TypeFiliere,
    filieresProvisoires,
    formationsProvisoires
} from 'app/data/donnees-provisoires';

interface FormationsParNiveau
{
    niveau: NiveauFormation;
    formations: Formation[];
}

interface FiliereAffichee
{
    filiere: Filiere;
    formationsParNiveau: FormationsParNiveau[];
}

interface SectionFilieres
{
    titre: string | null;
    filieres: FiliereAffichee[];
}

@Component({
    selector: 'filieres',
    templateUrl: './filieres.component.html'
})
export class FilieresComponent implements OnInit
{
    readonly types: TypeFiliere[] = ['industrielle', 'tertiaire', 'universitaire'];
    readonly niveaux: NiveauFormation[] = ['BAC+2', 'BAC+3', 'BAC+5'];
    typeSelectionne: TypeFiliere = 'industrielle';
    recherche = '';
    isLoading = true;
    loadError: string | null = null;
    private filieres: Filiere[] = [];
    private formations: Formation[] = [];

    ngOnInit(): void
    {
        this.filieres = filieresProvisoires;
        this.formations = formationsProvisoires;
        this.isLoading = false;
    }

    get sections(): SectionFilieres[]
    {
        const recherche = this._normaliser(this.recherche);
        const filieresAffichees = this.filieres
            .filter(filiere => filiere.type === this.typeSelectionne)
            .map(filiere => {
                const formations = this.formations.filter(formation => formation.filiereId === filiere.id);
                const correspondFiliere = !recherche || this._normaliser(
                    `${filiere.nom} ${filiere.description} ${filiere.ufr || ''}`
                ).includes(recherche);
                const formationsCorrespondantes = correspondFiliere || !recherche
                    ? formations
                    : formations.filter(formation =>
                        this._normaliser(`${formation.nom} ${formation.niveau} ${formation.prerequis.join(' ')}`)
                            .includes(recherche)
                    );

                return {
                    filiere,
                    formationsParNiveau: this.niveaux.map(niveau => ({
                        niveau,
                        formations: formationsCorrespondantes.filter(formation => formation.niveau === niveau)
                    })).filter(groupe => groupe.formations.length > 0)
                };
            })
            .filter(item => item.formationsParNiveau.length > 0);

        if (this.typeSelectionne !== 'universitaire')
        {
            return filieresAffichees.length
                ? [{ titre: null, filieres: filieresAffichees }]
                : [];
        }

        const parUfr = new Map<string, FiliereAffichee[]>();
        filieresAffichees.forEach(item => {
            const ufr = item.filiere.ufr || 'UFR non renseignée';
            const itemsUfr = parUfr.get(ufr) || [];
            itemsUfr.push(item);
            parUfr.set(ufr, itemsUfr);
        });

        return Array.from(parUfr.entries()).map(([titre, filieres]) => ({ titre, filieres }));
    }

    compterFilieres(type: TypeFiliere): number
    {
        return this.filieres.filter(filiere => filiere.type === type).length;
    }

    libelleType(type: TypeFiliere): string
    {
        const libelles: Record<TypeFiliere, string> = {
            industrielle: 'Industrielles',
            tertiaire: 'Tertiaires',
            universitaire: 'Universitaires (UFR)'
        };

        return libelles[type];
    }

    trackByType(index: number, type: TypeFiliere): string
    {
        return type;
    }

    trackBySection(index: number, section: SectionFilieres): string
    {
        return section.titre || this.typeSelectionne;
    }

    trackByFiliere(index: number, item: FiliereAffichee): string
    {
        return item.filiere.id;
    }

    trackByNiveau(index: number, groupe: FormationsParNiveau): string
    {
        return groupe.niveau;
    }

    trackByFormation(index: number, formation: Formation): string
    {
        return formation.id;
    }

    private _normaliser(texte: string): string
    {
        return texte.trim().toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
}
