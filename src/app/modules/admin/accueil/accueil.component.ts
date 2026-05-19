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
  { nom: "PIGIER", note: 7.5 },
  { nom: "IUA", note: 7.0 },
  { nom: "UTT LOKO", note: 6.0 },
  { nom: "HEC Abidjan", note: 4.5 },
  { nom: "ESGIS", note: 4.0 },
];

ecoleSelectionnee = {
  nom: "PIGIER",
  ville: "Abidjan",
  noteGlobale: 4.5,
  criteres: [
    { icon: "groups", label: "Professeurs", note: 7.0 },
    { icon: "domain", label: "Infrastructures", note: 8.0 },
    { icon: "sentiment_satisfied", label: "Ambiance", note: 6.0 },
  ]
};
    /**
     * Constructor
     */
    constructor()
    {
    }
}
