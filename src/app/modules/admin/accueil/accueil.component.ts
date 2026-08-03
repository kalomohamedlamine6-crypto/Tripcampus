import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'accueil',
    templateUrl  : './accueil.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AccueilComponent
{
  // accueil.component.ts
ecoles = [
  { nom: 'PIGIER', note: 7.5 },
  { nom: 'IUA', note: 7.0 },
  { nom: 'UTT LOKO', note: 6.0 },
  { nom: 'HEC Abidjan', note: 4.5 },
  { nom: 'ESGIS', note: 4.0 },
];

ecolesCriteres = [
  { label: 'Infrastructures', note: 10},
  { label: 'Administration', note: 10},
  { label: 'Ambiance', note: 10},
  { label: 'Insertion Professionnelle', note: 10},
  { label: 'Qualité:Prix', note: 10},
];

ecoleSelectionnee = {
  nom: 'PIGIER',
  ville: 'Abidjan',
  noteGlobale: 4.5,
  criteres: [
    { icon: 'domain', label: 'Infrastructures', note: 8.0 },
    { icon: 'supervisor_account', label: 'Administration', note: 6.0 },
    { icon: 'sentiment_satisfied', label: 'Ambiance', note: 6.0 },
    { icon: 'business_center', label: 'Insertion Professionnelle', note: 9.0 },
    { icon: 'hotel_class', label: 'Qualité/Prix', note: 9.0 },
  ]
};

    /**
     * Constructor
     */
    constructor()
    {
    }

    //  tableau de 5 étoiles
    get etoiles(): string[] {

      return Array.from({ length: 5 }, (_, i) => {
        if (i < Math.floor(this.ecoleSelectionnee.noteGlobale)) { return 'full'; }
        return 'empty';
      });
    }
}


