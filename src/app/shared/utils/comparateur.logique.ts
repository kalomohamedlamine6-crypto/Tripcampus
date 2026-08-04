import type { Etablissement, CriterionKey } from 'app/modules/admin/serviceGlobal/serviceGlobal.service';

// ============================================================
//  LES CRITÈRES — description de "ce qu'on compare"
// ============================================================

export type SensCritere = 'PLUS_BAS_MIEUX' | 'PLUS_HAUT_MIEUX';

export interface CritereNumerique<T, K extends string = string> {
  cle: K; // identifiant lisible, ex: "fraisAnnuels"
  label: string;
  poids: number;
  sens: SensCritere;
  extraire: (item: T) => number; // fonction qui va chercher la valeur dans l'objet
}


// ============================================================
//  LE MOTEUR DE SCORING — la logique générique
// ============================================================

// Détail du score pour un seul critère


export interface ResultatComparaison<T> {
  scores: Map<T, number>;        //les scores de tous les items stockés dans une Map
  gagnants: T[];               //la liste des gagnants en tableau pour des éventuelles égalités
}

//FONCTION POUR IDENTIFIER LE GAGNANT DE LA COMPARAISON
export const trouverGagnant = <T>(scores: Map<T, number>, items: T[]): T[] => {
  let meilleurScore = scores.get(items[0]) ?? 0;
  let meilleursItems = [items[0]];

  for (const [item, score] of scores) {
    if (score > meilleurScore) {
      meilleursItems = [item];
      meilleurScore = score;
    } else if (score === meilleurScore) {
      meilleursItems.push(item);
    }
  }
  return meilleursItems;
};



export const comparer = <T, K extends string>(
  items: T[], // pour la comparaison entre au moins 2 établissements !
  criteres: CritereNumerique<T, K>[]
): ResultatComparaison<T> => {


  const scores = new Map<T, number>();
  for (const critere of criteres) {

    // calcul du total (part globale)
    let total = 0;
    for (const item of items) {
      total += critere.extraire(item);
    }

    // valeurs transformées selon le sens (PLUS_BAS_MIEUX -> on inverse)
    const valeursTransformees = new Map<T, number>();
    let totalTransformee = 0;
    for (const item of items) {
      const raw = critere.extraire(item);
      const transformed = critere.sens === 'PLUS_BAS_MIEUX' ? total - raw : raw;
      valeursTransformees.set(item, transformed);
      totalTransformee += transformed;
    }

    // ratio, pondération et calcul du score de chaque item
    for (const item of items) {
      const ratio = (valeursTransformees.get(item) ?? 0)/totalTransformee;
      const contribution = ratio*critere.poids;
      const ancienScore = scores.get(item) ?? 0;
      const nouveauScore = ancienScore + contribution;
      scores.set(item, nouveauScore);
    }
  }
  const gagnants = trouverGagnant(scores, items);

  return {scores, gagnants};
};

export const criteresEtablissement: CritereNumerique<Etablissement, CriterionKey>[]=[
  {
    cle: 'fraisAnnuels',
    label: 'Frais de scolarité',
    poids: 0.2,
    sens: 'PLUS_BAS_MIEUX',
    extraire: etab => etab.fraisAnnuels,
  },
  {
    cle: 'noteMoyenne',
    label: 'Note moyenne',
    poids: 0.3,
    sens: 'PLUS_HAUT_MIEUX',
    extraire: etab => typeof etab.noteMoyenne === 'number' ? etab.noteMoyenne : parseInt(etab.noteMoyenne, 10) || 0,
  },
  {
    cle: 'tauxReussiteExamens',
    label: 'Taux de réussite Examens',
    poids: 0.2,
    sens: 'PLUS_HAUT_MIEUX',
    extraire: etab => etab.tauxReussiteExamens,
  },
  {
    cle: 'tauxInsertion',
    label: 'Insertion Pro.',
    poids: 0.2,
    sens: 'PLUS_HAUT_MIEUX',
    extraire: etab => etab.tauxInsertion,
  },
];
