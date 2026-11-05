import { Component, OnInit } from '@angular/core';
import {
    Actualite,
    CategorieActualite,
    actualitesProvisoires
} from 'app/data/donnees-provisoires';

type FiltreActualite = CategorieActualite | 'Toutes';

@Component({
    selector: 'actualites',
    templateUrl: './actualites.component.html'
})
export class ActualitesComponent implements OnInit
{
    readonly categories: CategorieActualite[] = [
        'Opportunités et concours',
        'Calendrier officiel',
        'Événements d’orientation',
        'Vie étudiante',
        'Annonces des établissements'
    ];
    filtreSelectionne: FiltreActualite = 'Toutes';
    actualites: Actualite[] = [];
    isLoading = true;
    loadError: string | null = null;

    ngOnInit(): void
    {
        this.actualites = actualitesProvisoires
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date));
        this.isLoading = false;
    }

    get actualitesFiltrees(): Actualite[]
    {
        return this.filtreSelectionne === 'Toutes'
            ? this.actualites
            : this.actualites.filter(actualite => actualite.categorie === this.filtreSelectionne);
    }

    compterActualites(categorie: FiltreActualite): number
    {
        return categorie === 'Toutes'
            ? this.actualites.length
            : this.actualites.filter(actualite => actualite.categorie === categorie).length;
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

    trackByCategorie(index: number, categorie: CategorieActualite): string
    {
        return categorie;
    }

    trackByActualite(index: number, actualite: Actualite): string
    {
        return actualite.id;
    }

    classeBadge(categorie: CategorieActualite): string
    {
        const classes: Record<CategorieActualite, string> = {
            'Opportunités et concours': 'bg-amber-100 text-amber-900',
            'Calendrier officiel': 'bg-blue-100 text-blue-900',
            'Événements d’orientation': 'bg-violet-100 text-violet-900',
            'Vie étudiante': 'bg-emerald-100 text-emerald-900',
            'Annonces des établissements': 'bg-rose-100 text-rose-900'
        };

        return classes[categorie];
    }
}
