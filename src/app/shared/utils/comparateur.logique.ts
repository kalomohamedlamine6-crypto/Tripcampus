
// ============================================================
//  LES CRITÈRES — description de "ce qu'on compare"
// ============================================================


export type SensCritere = "PLUS_BAS_MIEUX" | "PLUS_HAUT_MIEUX";



export interface CritereNumerique<T, K> {
  cle: K; // identifiant lisible, ex: "fraisAnnuels"
  label: string; 
  poids: number; // poids du critère dans le score final
  sens: SensCritere;
  extraire: (item: T) => number; // fonction qui va chercher la valeur dans l'objet
}





// ============================================================
//  LE MOTEUR DE SCORING — la logique générique
// ============================================================

// Détail du score pour un seul critère
export interface DetailScore {
  cle: string;
  label: string;
  valeurA: number; 
  valeurB: number; 
  gagnant: "A" | "B" | "EGALITE";
}

export interface ResultatComparaison<T> {
  a: T;
  b: T;
  scoreA: number;
  scoreB: number;
  gagnant: "A" | "B" | "EGALITE";
  details: DetailScore[];
}

// Normalise deux valeurs numériques en un ratio entre 0 et 1,
// en tenant compte du sens 
function normaliserNombres(valeur: number, adverse: number, sens: SensCritere): number {
  const total = valeur + adverse;
  if (total === 0) return 0.5; // égalité si les deux valent 0

  const ratio = valeur / total;
  return sens === "PLUS_HAUT_MIEUX" ? ratio : 1 - ratio;
}

// Calcule le ratio de A pour UN critère, quelle que soit sa forme.
//  TypeScript sait, À L'INTÉRIEUR de chaque bloc if,
// exactement quels champs sont disponibles sur "critere".
// Essaie par exemple d'écrire "critere.preference" dans le bloc
// "numerique" ci-dessous : TypeScript te dira que ce champ n'existe
// pas pour ce type-là. C'est ça, la sécurité apportée par le discriminant.
function calculerRatioA<T, K>(
  critere: CritereNumerique<T, K>,
  a: T,
  b: T,
): { ratioA: number; valeurA: number; valeurB: number } {
 {
    const valeurA = critere.extraire(a);
    const valeurB = critere.extraire(b);
    return {
      ratioA: normaliserNombres(valeurA, valeurB, critere.sens),
      valeurA,
      valeurB,
    };
  }

}


export function comparer<T, K extends string>(
  // a: T, ceux-ci
  // b: T, concernaient la comparaison pour seulement 2 établissements
  items: T[] // pour la comparaison entre 3 établissements ou plus !
  criteres: CritereNumerique<T, K>[]
): ResultatComparaison<T> {
  let scoreA = 0;
  let scoreB = 0;
  const details: DetailScore[] = [];

  for (const critere of criteres) {
    // log
    const { ratioA, valeurA, valeurB } = calculerRatioA(critere, a, b);
    const ratioB = 1 - ratioA;

    scoreA += ratioA * critere.poids;
    scoreB += ratioB * critere.poids;

    details.push({
      cle: critere.cle,
      label: critere.label,
      valeurA,
      valeurB,
      gagnant: ratioA === ratioB ? "EGALITE" : ratioA > ratioB ? "A" : "B",
    });
  }

  return {
    a,
    b,
    scoreA: Math.round(scoreA * 100),
    scoreB: Math.round(scoreB * 100),
    gagnant: scoreA === scoreB ? "EGALITE" : scoreA > scoreB ? "A" : "B",
    details,
  };
}