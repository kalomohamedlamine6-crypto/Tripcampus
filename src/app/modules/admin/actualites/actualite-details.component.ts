import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actualite, Etablissement, actualitesProvisoires, etablissementsProvisoires } from 'app/data/donnees-provisoires';

@Component({
    selector: 'actualite-details',
    templateUrl: './actualite-details.component.html'
})
export class ActualiteDetailsComponent implements OnInit
{
    isLoading = true;
    loadError: string | null = null;
    actualite: Actualite | null = null;
    etablissement: Etablissement | null = null;

    constructor(private _route: ActivatedRoute)
    {
    }

    ngOnInit(): void
    {
        const id = this._route.snapshot.paramMap.get('id');
        this.actualite = actualitesProvisoires.find(item => item.id === id) || null;
        this.etablissement = this.actualite?.etablissementId
            ? etablissementsProvisoires.find(item => item.id === this.actualite?.etablissementId) || null
            : null;
        this.isLoading = false;
    }

    formatDate(dateIso: string): string
    {
        return new Intl.DateTimeFormat('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC'
        }).format(new Date(`${dateIso}T00:00:00Z`));
    }

    trackByParagraphe(index: number, paragraphe: string): string
    {
        return `${index}:${paragraphe}`;
    }

    classeBadge(categorie: Actualite['categorie']): string
    {
        const classes: Record<Actualite['categorie'], string> = {
            'Opportunités et concours': 'bg-amber-100 text-amber-900',
            'Calendrier officiel': 'bg-blue-100 text-blue-900',
            'Événements d’orientation': 'bg-violet-100 text-violet-900',
            'Vie étudiante': 'bg-emerald-100 text-emerald-900',
            'Annonces des établissements': 'bg-rose-100 text-rose-900'
        };

        return classes[categorie];
    }
}
