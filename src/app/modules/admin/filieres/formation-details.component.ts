import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    Etablissement,
    Filiere,
    Formation,
    OffreFormationEtablissement,
    etablissementsProvisoires,
    filieresProvisoires,
    formationsProvisoires,
    offresFormationEtablissement
} from 'app/data/donnees-provisoires';

interface OffreAvecEtablissement
{
    etablissement: Etablissement;
    offre: OffreFormationEtablissement;
}

@Component({
    selector: 'formation-details',
    templateUrl: './formation-details.component.html'
})
export class FormationDetailsComponent implements OnInit
{
    isLoading = true;
    loadError: string | null = null;
    formation: Formation | null = null;
    filiere: Filiere | null = null;
    offres: OffreAvecEtablissement[] = [];

    constructor(private _route: ActivatedRoute)
    {
    }

    ngOnInit(): void
    {
        const formationId = this._route.snapshot.paramMap.get('id');
        this.formation = formationsProvisoires.find(item => item.id === formationId) || null;

        if (this.formation)
        {
            const formation = this.formation;
            this.filiere = filieresProvisoires.find(item => item.id === formation.filiereId) || null;

            if (!this.filiere)
            {
                this.loadError = 'La filière associée à cette formation est introuvable dans les données de démonstration.';
            }
            else
            {
                this.offres = offresFormationEtablissement
                    .filter(offre => offre.formationId === formation.id)
                    .map(offre => {
                        const etablissement = etablissementsProvisoires.find(item => item.id === offre.etablissementId);

                        return etablissement ? { etablissement, offre } : null;
                    })
                    .filter((item): item is OffreAvecEtablissement => item !== null);
            }
        }

        this.isLoading = false;
    }

    trackByOffre(index: number, item: OffreAvecEtablissement): string
    {
        return `${item.offre.etablissementId}:${item.offre.formationId}`;
    }

    trackByDebouche(index: number, debouche: string): string
    {
        return debouche;
    }

    libelleType(type: Filiere['type']): string
    {
        const libelles: Record<Filiere['type'], string> = {
            industrielle: 'Industrielle',
            tertiaire: 'Tertiaire',
            universitaire: 'Universitaire (UFR)'
        };

        return libelles[type];
    }
}
