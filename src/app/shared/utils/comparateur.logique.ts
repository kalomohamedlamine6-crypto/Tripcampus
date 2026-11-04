export type SensCritere = 'PLUS_BAS_MIEUX' | 'PLUS_HAUT_MIEUX';

export interface ComparisonItem
{
  id: string;
  name: string;
  ville: string;
  statut: 'Public' | 'Privé';
  niveau: string;
  fraisAnnuels: number;
  tauxReussiteExamens: number;
}

export type CriterionKey = 'fraisAnnuels' | 'tauxReussiteExamens';

export interface CritereNumerique<T, K extends string = string> {
  cle: K;
  label: string;
  poids: number;
  sens: SensCritere;
  extraire: (item: T) => number;
}

export interface ResultatComparaison<T> {
  scores: Map<T, number>;
  gagnants: T[];
}

export const trouverGagnant = <T>(scores: Map<T, number>, items: T[]): T[] => {
  if (!items.length) {
    return [];
  }

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
  items: T[],
  criteres: CritereNumerique<T, K>[]
): ResultatComparaison<T> => {
  if (!items.length) {
    return { scores: new Map(), gagnants: [] };
  }

  const scores = new Map<T, number>();

  for (const critere of criteres) {
    let total = 0;
    for (const item of items) {
      total += critere.extraire(item);
    }

    const valeursTransformees = new Map<T, number>();
    let totalTransformee = 0;

    for (const item of items) {
      const raw = critere.extraire(item);
      const transformed = critere.sens === 'PLUS_BAS_MIEUX' ? total - raw : raw;
      valeursTransformees.set(item, transformed);
      totalTransformee += transformed;
    }

    for (const item of items) {
      const ratio = totalTransformee === 0 ? 0 : (valeursTransformees.get(item) ?? 0) / totalTransformee;
      const contribution = ratio * critere.poids;
      const ancienScore = scores.get(item) ?? 0;
      scores.set(item, ancienScore + contribution);
    }
  }

  return { scores, gagnants: trouverGagnant(scores, items) };
};

export const criteresEtablissement: CritereNumerique<ComparisonItem, CriterionKey>[] = [
  {
    cle: 'fraisAnnuels',
    label: 'Frais de scolarité',
    poids: 0.5,
    sens: 'PLUS_BAS_MIEUX',
    extraire: item => item.fraisAnnuels,
  },
  {
    cle: 'tauxReussiteExamens',
    label: 'Taux de réussite',
    poids: 0.5,
    sens: 'PLUS_HAUT_MIEUX',
    extraire: item => item.tauxReussiteExamens,
  },
];
