import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import {
    Etablissement,
    Formation,
    OffreFormationEtablissement,
    StatutEtablissement,
    etablissementsProvisoires,
    filtresFraisFictifs,
    formationsProvisoires,
    offresFormationEtablissement
} from 'app/data/donnees-provisoires';

type TriEtablissements = 'nom' | 'frais';

@Component({
    selector: 'decouvrir',
    templateUrl: './decouvrir.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DecouvrirComponent implements OnInit
{
    readonly filtresFrais = filtresFraisFictifs;
    etablissements: Etablissement[] = [];
    recherche = '';
    villeSelectionnee = '';
    statutSelectionne: StatutEtablissement | '' = '';
    fraisMaximum: number | null = null;
    tri: TriEtablissements = 'nom';
    etablissementSelectionne: Etablissement | null = null;
    isLoading = true;
    loadError: string | null = null;

    constructor(private _route: ActivatedRoute)
    {
    }

    ngOnInit(): void
    {
        this.etablissements = etablissementsProvisoires;
        this._route.queryParamMap.pipe(take(1)).subscribe(params => {
            const etablissementId = params.get('etablissement');
            this.etablissementSelectionne = this.etablissements.find(item => item.id === etablissementId) || null;
        });
        this.isLoading = false;
    }

    get villes(): string[]
    {
        return Array.from(new Set(this.etablissements.map(etablissement => etablissement.ville)))
            .sort((a, b) => a.localeCompare(b, 'fr'));
    }

    get etablissementsFiltres(): Etablissement[]
    {
        const rechercheNormalisee = this._normaliser(this.recherche);
        const resultats = this.etablissements.filter(etablissement => {
            const texteEtablissement = this._normaliser(
                `${etablissement.nom} ${etablissement.ville} ${etablissement.description}`
            );
            const correspondRecherche = !rechercheNormalisee || texteEtablissement.includes(rechercheNormalisee);
            const correspondVille = !this.villeSelectionnee || etablissement.ville === this.villeSelectionnee;
            const correspondStatut = !this.statutSelectionne || etablissement.statut === this.statutSelectionne;
            const fraisMaximum = this.fraisMaximum;
            const correspondFrais = fraisMaximum === null ||
                this.offresEtablissement(etablissement.id)
                    .some(offre => offre.fraisScolariteAnnuelsFictifs <= fraisMaximum);

            return correspondRecherche && correspondVille && correspondStatut && correspondFrais;
        });

        return resultats.sort((a, b) => {
            if (this.tri === 'frais')
            {
                return (this.fraisMinimum(a.id) ?? Number.POSITIVE_INFINITY) -
                    (this.fraisMinimum(b.id) ?? Number.POSITIVE_INFINITY);
            }

            return a.nom.localeCompare(b.nom, 'fr');
        });
    }

    offresEtablissement(etablissementId: string): OffreFormationEtablissement[]
    {
        return offresFormationEtablissement.filter(offre => offre.etablissementId === etablissementId);
    }

    formation(formationId: string): Formation | undefined
    {
        return formationsProvisoires.find(item => item.id === formationId);
    }

    fraisMinimum(etablissementId: string): number | null
    {
        const frais = this.offresEtablissement(etablissementId)
            .map(offre => offre.fraisScolariteAnnuelsFictifs);

        return frais.length ? Math.min(...frais) : null;
    }

    afficherDetails(etablissement: Etablissement): void
    {
        this.etablissementSelectionne = etablissement;
    }

    effacerFiltres(): void
    {
        this.recherche = '';
        this.villeSelectionnee = '';
        this.statutSelectionne = '';
        this.fraisMaximum = null;
        this.tri = 'nom';
    }

    trackById(index: number, item: { id: string }): string
    {
        return item.id;
    }

    trackByValue(index: number, item: string): string
    {
        return item;
    }

    trackByFrais(index: number, item: { valeur: number }): number
    {
        return item.valeur;
    }

    trackByOffre(index: number, item: OffreFormationEtablissement): string
    {
        return `${item.etablissementId}:${item.formationId}`;
    }

    private _normaliser(valeur: string): string
    {
        return valeur.trim().toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
}
