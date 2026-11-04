/**
 * FICTIF : données locales de démonstration, à remplacer par des données vérifiées.
 * Les valeurs chiffrées doivent rester explicitement signalées comme fictives à l'écran.
 */
export type TypeFiliere = 'industrielle' | 'tertiaire' | 'mixte';

export type NiveauFormation = 'BAC+2' | 'BAC+3' | 'BAC+5';

export type StatutEtablissement = 'public' | 'privé';

export interface Filiere
{
    id: string;
    nom: string;
    type: TypeFiliere;
    description: string;
    icone: string;
}

export interface Formation
{
    id: string;
    filiereId: string;
    nom: string;
    niveau: NiveauFormation;
    prerequis: string[];
    dureeMoisFictive: number;
    debouches: string[];
}

export interface Etablissement
{
    id: string;
    nom: string;
    ville: string;
    statut: StatutEtablissement;
    description: string;
    localisation: string;
    conditionsAdmission: string[];
}

export interface OffreFormationEtablissement
{
    etablissementId: string;
    formationId: string;
    fraisScolariteAnnuelsFictifs: number;
    tauxReussiteFictif: number;
}

export interface StatistiqueAccueil
{
    valeur: string;
    libelle: string;
    estFictive: boolean;
}

export interface AtoutAccueil
{
    icone: string;
    titre: string;
    description: string;
}

export interface FraisFilterOption
{
    valeur: number;
    libelle: string;
}

export const statistiquesAccueil: StatistiqueAccueil[] = [
    { valeur: '120+', libelle: 'établissements à découvrir', estFictive: true }, // FICTIF
    { valeur: '500+', libelle: 'formations à explorer', estFictive: true }, // FICTIF
    { valeur: 'Locales', libelle: 'données de démonstration', estFictive: false }
];

export const atoutsAccueil: AtoutAccueil[] = [
    {
        icone: 'heroicons_solid:adjustments',
        titre: 'Comparer les établissements',
        description: 'Mettez en regard des critères utiles pour avancer dans votre choix.'
    },
    {
        icone: 'heroicons_solid:support',
        titre: 'Faire le point sur votre profil',
        description: 'Explorez vos centres d’intérêt, vos compétences et vos préférences.'
    },
    {
        icone: 'heroicons_solid:trending-up',
        titre: 'Découvrir des pistes d’études',
        description: 'Repérez des filières et des formations à explorer selon votre projet.'
    }
];

export const filieresPorteuses: Filiere[] = [
    {
        id: 'technologies-information',
        nom: 'Technologies de l’information',
        type: 'industrielle',
        description: 'Développement, cybersécurité et transformation numérique.',
        icone: 'heroicons_solid:chip'
    },
    {
        id: 'finance-banque',
        nom: 'Finance et banque',
        type: 'tertiaire',
        description: 'Comptabilité, gestion et services financiers.',
        icone: 'heroicons_solid:trending-up'
    },
    {
        id: 'energies-ressources',
        nom: 'Énergies et ressources',
        type: 'industrielle',
        description: 'Énergies, ressources naturelles et transition énergétique.',
        icone: 'heroicons_solid:lightning-bolt'
    },
    {
        id: 'agronomie',
        nom: 'Agronomie',
        type: 'mixte',
        description: 'Production agricole, transformation et valorisation des filières.',
        icone: 'heroicons_solid:support'
    },
    {
        id: 'construction-btp',
        nom: 'Construction et BTP',
        type: 'industrielle',
        description: 'Génie civil, construction et conduite de projets.',
        icone: 'heroicons_solid:library'
    },
    {
        id: 'sante-bien-etre',
        nom: 'Santé et bien-être',
        type: 'tertiaire',
        description: 'Métiers du soin, de la prévention et des services de santé.',
        icone: 'heroicons_solid:heart'
    }
];

export const formationsProvisoires: Formation[] = [
    {
        id: 'developpement-logiciel',
        filiereId: 'technologies-information',
        nom: 'Développement logiciel',
        niveau: 'BAC+3',
        prerequis: ['Baccalauréat ou diplôme équivalent'],
        dureeMoisFictive: 36, // FICTIF
        debouches: ['Développeur ou développeuse', 'Testeur ou testeuse logiciel']
    },
    {
        id: 'systemes-reseaux',
        filiereId: 'technologies-information',
        nom: 'Systèmes et réseaux',
        niveau: 'BAC+2',
        prerequis: ['Baccalauréat ou diplôme équivalent'],
        dureeMoisFictive: 24, // FICTIF
        debouches: ['Technicien ou technicienne réseaux', 'Assistant ou assistante informatique']
    },
    {
        id: 'comptabilite-gestion',
        filiereId: 'finance-banque',
        nom: 'Comptabilité et gestion',
        niveau: 'BAC+3',
        prerequis: ['Baccalauréat ou diplôme équivalent'],
        dureeMoisFictive: 36, // FICTIF
        debouches: ['Assistant ou assistante comptable', 'Gestionnaire administratif ou administrative']
    },
    {
        id: 'gestion-financiere',
        filiereId: 'finance-banque',
        nom: 'Gestion financière',
        niveau: 'BAC+5',
        prerequis: ['Licence ou diplôme équivalent'],
        dureeMoisFictive: 24, // FICTIF
        debouches: ['Analyste financier ou financière', 'Responsable de gestion']
    },
    {
        id: 'production-agricole',
        filiereId: 'agronomie',
        nom: 'Production agricole',
        niveau: 'BAC+2',
        prerequis: ['Baccalauréat ou diplôme équivalent'],
        dureeMoisFictive: 24, // FICTIF
        debouches: ['Technicien ou technicienne agricole', 'Assistant ou assistante de production']
    }
];

export const etablissementsProvisoires: Etablissement[] = [
    {
        id: 'etablissement-demo-cocody',
        nom: 'Établissement de démonstration — Cocody',
        ville: 'Abidjan — Cocody',
        statut: 'public',
        description: 'Exemple fictif d’établissement public pour présenter le catalogue.',
        localisation: 'Cocody, Abidjan',
        conditionsAdmission: ['Admission sur dossier', 'Baccalauréat ou diplôme équivalent']
    },
    {
        id: 'institut-demo-treichville',
        nom: 'Institut fictif de démonstration — Treichville',
        ville: 'Abidjan — Treichville',
        statut: 'privé',
        description: 'Exemple fictif d’établissement privé pour illustrer une fiche détaillée.',
        localisation: 'Treichville, Abidjan',
        conditionsAdmission: ['Étude du dossier', 'Entretien selon la formation']
    },
    {
        id: 'ecole-demo-yopougon',
        nom: 'École supérieure fictive de démonstration — Yopougon',
        ville: 'Abidjan — Yopougon',
        statut: 'privé',
        description: 'Exemple fictif d’établissement proposant des formations de démonstration.',
        localisation: 'Yopougon, Abidjan',
        conditionsAdmission: ['Admission sur dossier', 'Baccalauréat ou diplôme équivalent']
    }
];

export const offresFormationEtablissement: OffreFormationEtablissement[] = [
    {
        etablissementId: 'etablissement-demo-cocody',
        formationId: 'developpement-logiciel',
        fraisScolariteAnnuelsFictifs: 150000, // FICTIF
        tauxReussiteFictif: 68 // FICTIF
    },
    {
        etablissementId: 'etablissement-demo-cocody',
        formationId: 'systemes-reseaux',
        fraisScolariteAnnuelsFictifs: 120000, // FICTIF
        tauxReussiteFictif: 72 // FICTIF
    },
    {
        etablissementId: 'institut-demo-treichville',
        formationId: 'developpement-logiciel',
        fraisScolariteAnnuelsFictifs: 480000, // FICTIF
        tauxReussiteFictif: 78 // FICTIF
    },
    {
        etablissementId: 'ecole-demo-yopougon',
        formationId: 'developpement-logiciel',
        fraisScolariteAnnuelsFictifs: 350000, // FICTIF
        tauxReussiteFictif: 71 // FICTIF
    },
    {
        etablissementId: 'institut-demo-treichville',
        formationId: 'comptabilite-gestion',
        fraisScolariteAnnuelsFictifs: 420000, // FICTIF
        tauxReussiteFictif: 74 // FICTIF
    },
    {
        etablissementId: 'ecole-demo-yopougon',
        formationId: 'comptabilite-gestion',
        fraisScolariteAnnuelsFictifs: 390000, // FICTIF
        tauxReussiteFictif: 70 // FICTIF
    },
    {
        etablissementId: 'ecole-demo-yopougon',
        formationId: 'production-agricole',
        fraisScolariteAnnuelsFictifs: 310000, // FICTIF
        tauxReussiteFictif: 66 // FICTIF
    }
];

export const filtresFraisFictifs: FraisFilterOption[] = [
    { valeur: 250000, libelle: 'Jusqu’à 250 000 FCFA/an' }, // FICTIF
    { valeur: 400000, libelle: 'Jusqu’à 400 000 FCFA/an' }, // FICTIF
    { valeur: 600000, libelle: 'Jusqu’à 600 000 FCFA/an' } // FICTIF
];
