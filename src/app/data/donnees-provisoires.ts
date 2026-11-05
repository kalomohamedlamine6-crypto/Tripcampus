/**
 * Données locales illustratives, à remplacer par des données vérifiées.
 * Les mesures et montants portent un suffixe Fictif et restent signalés dans l’interface.
 */
export type TypeFiliere = 'industrielle' | 'tertiaire' | 'universitaire';
export type NiveauFormation = 'BAC+2' | 'BAC+3' | 'BAC+5';
export type StatutEtablissement = 'public' | 'privé';
export type EtapeQuiz = 'centres' | 'competences' | 'preferences';
export type CategorieActualite =
    | 'Opportunités et concours'
    | 'Calendrier officiel'
    | 'Événements d’orientation'
    | 'Vie étudiante'
    | 'Annonces des établissements';

export interface Filiere
{
    id: string;
    nom: string;
    type: TypeFiliere;
    ufr?: string;
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
    noteFictive: number;
}

export interface OffreFormationEtablissement
{
    etablissementId: string;
    formationId: string;
    fraisScolariteAnnuelsFictifs: number;
    tauxReussiteFictif: number;
    tauxInsertionFictif: number;
}

export interface OptionQuestionQuiz
{
    valeur: string;
    libelle: string;
    poidsParFiliere: Partial<Record<string, number>>;
}

export interface QuestionQuiz
{
    id: string;
    etape: EtapeQuiz;
    question: string;
    options: OptionQuestionQuiz[];
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

export interface Actualite
{
    id: string;
    categorie: CategorieActualite;
    titre: string;
    resume: string;
    contenu: string[];
    date: string;
    etablissementId?: string;
}

export const actualitesProvisoires: Actualite[] = [
    {
        id: 'concours-esatic-2026',
        categorie: 'Opportunités et concours',
        titre: 'Préparation à un concours dans le numérique',
        resume: 'Une fiche pratique de démonstration pour organiser ses révisions et préparer un dossier de candidature.',
        contenu: [
            'Cet article est un exemple de contenu éditorial destiné à illustrer la rubrique. Il ne constitue pas une annonce réelle de concours.',
            'Pour préparer une candidature, rassemblez vos pièces, relisez les critères publiés par l’établissement concerné et prévoyez un calendrier de révision.',
            'Les dates, modalités et conditions doivent être vérifiées directement auprès des organismes compétents.'
        ],
        date: '2026-11-12',
        etablissementId: 'esatic'
    },
    {
        id: 'bourse-campus-demo',
        categorie: 'Opportunités et concours',
        titre: 'Conseils pour repérer les appels à bourses',
        resume: 'Quelques réflexes pour suivre les dispositifs d’aide et vérifier les critères d’éligibilité.',
        contenu: [
            'Cette publication de démonstration présente des conseils généraux; elle ne signale pas l’ouverture d’une bourse.',
            'Vérifiez l’organisme émetteur, les conditions d’éligibilité, les pièces demandées et la date limite indiquée sur la source de référence.',
            'Ne transmettez jamais de frais ou de documents sensibles à un interlocuteur dont l’identité n’a pas été vérifiée.'
        ],
        date: '2026-10-28'
    },
    {
        id: 'calendrier-rentree-demo',
        categorie: 'Calendrier officiel',
        titre: 'Repères de calendrier pour préparer la rentrée',
        resume: 'Un modèle de liste de vérification pour anticiper inscription, logement et fournitures.',
        contenu: [
            'Cette page est un exemple de démonstration et ne reproduit pas un calendrier officiel.',
            'Notez les dates annoncées par votre établissement, puis regroupez les démarches administratives, la recherche de logement et la préparation du matériel.',
            'Les calendriers et dates de rentrée varient selon les établissements et les formations : consultez leurs canaux officiels.'
        ],
        date: '2026-11-03'
    },
    {
        id: 'examens-planning-demo',
        categorie: 'Calendrier officiel',
        titre: 'Construire son planning de révision',
        resume: 'Une méthode simple pour répartir les révisions avant une période d’examens.',
        contenu: [
            'Ce contenu de démonstration propose une méthode de travail et ne présente aucune date d’examen réelle.',
            'Listez les matières, estimez les chapitres à revoir et répartissez les séances en alternant apprentissage, exercices et pauses.',
            'Pour connaître les dates et modalités d’examen, référez-vous aux informations communiquées par votre établissement.'
        ],
        date: '2026-10-20'
    },
    {
        id: 'salon-orientation-abidjan',
        categorie: 'Événements d’orientation',
        titre: 'Visite d’un salon de l’orientation',
        resume: 'Préparer ses questions avant de rencontrer des équipes pédagogiques et des étudiants.',
        contenu: [
            'Avant une visite, identifiez les formations qui vous intéressent et préparez des questions sur les prérequis, les débouchés et l’accompagnement étudiant.',
            'Confirmez toujours le lieu, les horaires et les modalités d’accès auprès des organisateurs.'
        ],
        date: '2026-11-01'
    },
    {
        id: 'atelier-choix-formation',
        categorie: 'Événements d’orientation',
        titre: 'Atelier : comparer deux parcours de formation',
        resume: 'Une activité pour comparer les contenus, les durées et les conditions d’admission.',
        contenu: [
            'Pour comparer deux parcours, relevez les matières enseignées, le niveau d’entrée, la durée, les stages et les poursuites d’études possibles.',
            'Demandez confirmation des informations à l’établissement avant toute décision.'
        ],
        date: '2026-10-15',
        etablissementId: 'inp-hb'
    },
    {
        id: 'vie-etudiante-budget',
        categorie: 'Vie étudiante',
        titre: 'Établir un budget étudiant mensuel',
        resume: 'Un exemple de postes à prévoir pour suivre ses dépenses au cours de l’année.',
        contenu: [
            'Cette publication propose une méthode de planification; les dépenses réelles varient selon la situation de chacun.',
            'Pensez à distinguer les dépenses régulières (transport, repas, logement) des dépenses ponctuelles (inscription, matériel, santé).',
            'Mettez à jour votre budget à partir de vos propres justificatifs et des tarifs applicables dans votre ville.'
        ],
        date: '2026-11-04'
    },
    {
        id: 'organisation-annee-etudiante',
        categorie: 'Vie étudiante',
        titre: 'Organiser son année entre cours et projets',
        resume: 'Des conseils pour planifier les cours, les révisions et les activités personnelles.',
        contenu: [
            'Ce contenu rappelle quelques principes d’organisation sans prétendre décrire une situation particulière.',
            'Utilisez un calendrier, fixez des objectifs réalistes et réservez des temps de repos. Ajustez votre méthode au fil du semestre.',
            'En cas de difficulté, renseignez-vous sur les dispositifs d’accompagnement proposés par votre établissement.'
        ],
        date: '2026-10-09'
    },
    {
        id: 'journee-portes-ouvertes',
        categorie: 'Annonces des établissements',
        titre: 'Annonce : journée de découverte d’un campus',
        resume: 'Une trame de présentation des activités possibles lors d’une journée portes ouvertes.',
        contenu: [
            'Cette annonce sert à montrer la présentation d’une actualité liée à un établissement.',
            'Une journée de découverte peut inclure une présentation des formations, une visite des espaces et un temps d’échange avec des équipes.',
            'Aucune date ni activité réelle n’est annoncée ici. Vérifiez les informations auprès de l’établissement.'
        ],
        date: '2026-10-30',
        etablissementId: 'pigier-ci'
    },
    {
        id: 'nouveau-parcours',
        categorie: 'Annonces des établissements',
        titre: 'Présentation d’un nouveau parcours',
        resume: 'Les éléments utiles à vérifier lorsqu’un établissement présente une nouvelle formation.',
        contenu: [
            'Avant de candidater, vérifiez l’intitulé du diplôme, son accréditation, le programme, les frais, les conditions d’admission et les débouchés annoncés.',
            'Les renseignements de cette page de démonstration ne remplacent pas ceux communiqués par l’établissement.'
        ],
        date: '2026-10-02',
        etablissementId: 'ufhb'
    }
];

const idsIndustriels = [
    'informatique-numerique-telecoms',
    'genie-civil-batiment',
    'mines-energie-hydrocarbures',
    'genie-mecanique-maintenance',
    'agriculture-agroalimentaire'
];

const idsTertiaires = [
    'finance-comptabilite-audit',
    'commerce-marketing-vente',
    'logistique-supply-chain',
    'ressources-humaines-communication',
    'administration-secretariat',
    'tourisme-services'
];

const idsUniversitaires = [
    'mathematiques-informatique',
    'physique-chimie-materiaux',
    'sciences-terre-ressources-minieres',
    'biosciences',
    'sciences-medicales',
    'droit-public',
    'droit-prive',
    'sciences-politiques',
    'sciences-economiques',
    'sciences-gestion',
    'lettres-modernes',
    'langues-vivantes',
    'arts',
    'sociologie-anthropologie',
    'philosophie',
    'histoire-geographie'
];

function poidsPour(filiereIds: string[], poids = 2): Partial<Record<string, number>>
{
    return filiereIds.reduce<Partial<Record<string, number>>>((resultat, id) => {
        resultat[id] = poids;
        return resultat;
    }, {});
}

function creerFiliere(
    id: string,
    nom: string,
    type: TypeFiliere,
    description: string,
    icone: string,
    ufr?: string
): Filiere
{
    return { id, nom, type, description, icone, ...(ufr ? { ufr } : {}) };
}

function creerFormation(
    id: string,
    filiereId: string,
    nom: string,
    niveau: NiveauFormation,
    prerequis: string[],
    dureeMoisFictive: number,
    debouches: string[]
): Formation
{
    return { id, filiereId, nom, niveau, prerequis, dureeMoisFictive, debouches };
}

export const statistiquesAccueil: StatistiqueAccueil[] = [
    { valeur: '7+', libelle: 'établissements', estFictive: true },
    { valeur: '61+', libelle: 'formations', estFictive: true },
    { valeur: 'Informations', libelle: '& données de démonstration', estFictive: false }
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

export const filieresProvisoires: Filiere[] = [
    creerFiliere('informatique-numerique-telecoms', 'Informatique, numérique et télécoms', 'industrielle', 'Développement logiciel, réseaux, systèmes électroniques et cybersécurité.', 'heroicons_solid:chip'),
    creerFiliere('genie-civil-batiment', 'Génie civil et bâtiment', 'industrielle', 'Conception, construction et suivi des ouvrages et infrastructures.', 'heroicons_solid:library'),
    creerFiliere('mines-energie-hydrocarbures', 'Mines, énergie et hydrocarbures', 'industrielle', 'Ressources minières, électrotechnique et transition énergétique.', 'heroicons_solid:lightning-bolt'),
    creerFiliere('genie-mecanique-maintenance', 'Génie mécanique et maintenance', 'industrielle', 'Maintenance des équipements, électromécanique et génie frigorifique.', 'heroicons_solid:cog'),
    creerFiliere('agriculture-agroalimentaire', 'Agriculture et agroalimentaire', 'industrielle', 'Production agricole, élevage et transformation agroalimentaire.', 'heroicons_solid:support'),

    creerFiliere('finance-comptabilite-audit', 'Finance, comptabilité et audit', 'tertiaire', 'Comptabilité, contrôle de gestion, finance et audit.', 'heroicons_solid:trending-up'),
    creerFiliere('commerce-marketing-vente', 'Commerce, marketing et vente', 'tertiaire', 'Développement commercial, commerce international et marketing digital.', 'heroicons_solid:briefcase'),
    creerFiliere('logistique-supply-chain', 'Logistique et supply chain', 'tertiaire', 'Organisation des transports, approvisionnements et flux de marchandises.', 'heroicons_solid:truck'),
    creerFiliere('ressources-humaines-communication', 'Ressources humaines et communication', 'tertiaire', 'Gestion des ressources humaines et communication des organisations.', 'heroicons_solid:users'),
    creerFiliere('administration-secretariat', 'Administration et secrétariat', 'tertiaire', 'Assistanat de direction et organisation administrative.', 'heroicons_solid:clipboard-list'),
    creerFiliere('tourisme-services', 'Tourisme et services', 'tertiaire', 'Accueil, tourisme et gestion des services hôteliers.', 'heroicons_solid:globe'),

    creerFiliere('mathematiques-informatique', 'Mathématiques et informatique', 'universitaire', 'Mathématiques fondamentales, appliquées et informatique.', 'heroicons_solid:calculator', 'UFR Sciences exactes, physiques et technologiques'),
    creerFiliere('physique-chimie-materiaux', 'Physique-chimie et sciences des matériaux', 'universitaire', 'Physique, chimie et étude des propriétés des matériaux.', 'heroicons_solid:beaker', 'UFR Sciences exactes, physiques et technologiques'),
    creerFiliere('sciences-terre-ressources-minieres', 'Sciences de la terre et des ressources minières', 'universitaire', 'Géologie, environnement et ressources du sous-sol.', 'heroicons_solid:globe-alt', 'UFR Sciences exactes, physiques et technologiques'),
    creerFiliere('biosciences', 'Biosciences', 'universitaire', 'Biologie, sciences du vivant et biodiversité.', 'heroicons_solid:heart', 'UFR Sciences de la vie et de la santé'),
    creerFiliere('sciences-medicales', 'Sciences médicales', 'universitaire', 'Études et sciences médicales.', 'heroicons_solid:plus-circle', 'UFR Sciences de la vie et de la santé'),
    creerFiliere('droit-public', 'Droit public', 'universitaire', 'Droit constitutionnel, administratif et institutions publiques.', 'heroicons_solid:scale', 'UFR Sciences juridiques, politiques et administratives'),
    creerFiliere('droit-prive', 'Droit privé', 'universitaire', 'Droit civil, droit des affaires et droit privé.', 'heroicons_solid:scale', 'UFR Sciences juridiques, politiques et administratives'),
    creerFiliere('sciences-politiques', 'Sciences politiques', 'universitaire', 'Institutions politiques, relations internationales et politiques publiques.', 'heroicons_solid:globe', 'UFR Sciences juridiques, politiques et administratives'),
    creerFiliere('sciences-economiques', 'Sciences économiques', 'universitaire', 'Économie, politiques économiques et analyse des marchés.', 'heroicons_solid:chart-bar', 'UFR Sciences économiques et de gestion'),
    creerFiliere('sciences-gestion', 'Sciences de gestion', 'universitaire', 'Gestion des organisations, management et stratégie.', 'heroicons_solid:briefcase', 'UFR Sciences économiques et de gestion'),
    creerFiliere('lettres-modernes', 'Lettres modernes', 'universitaire', 'Littérature, langue française et analyse des textes.', 'heroicons_solid:book-open', 'UFR Lettres, langues, arts et civilisations'),
    creerFiliere('langues-vivantes', 'Langues vivantes', 'universitaire', 'Langues, cultures et communication interculturelle.', 'heroicons_solid:chat-alt-2', 'UFR Lettres, langues, arts et civilisations'),
    creerFiliere('arts', 'Arts', 'universitaire', 'Histoire, pratiques et médiation des arts.', 'heroicons_solid:color-swatch', 'UFR Lettres, langues, arts et civilisations'),
    creerFiliere('sociologie-anthropologie', 'Sociologie et anthropologie', 'universitaire', 'Sociétés, cultures et transformations sociales.', 'heroicons_solid:user-group', 'UFR Sciences humaines et sociales'),
    creerFiliere('philosophie', 'Philosophie', 'universitaire', 'Histoire de la philosophie, éthique et pensée critique.', 'heroicons_solid:light-bulb', 'UFR Sciences humaines et sociales'),
    creerFiliere('histoire-geographie', 'Histoire et géographie', 'universitaire', 'Histoire des sociétés, territoires et dynamiques géographiques.', 'heroicons_solid:map', 'UFR Sciences humaines et sociales')
];

export const filieresPorteuses: Filiere[] = filieresProvisoires.filter(filiere =>
    ['informatique-numerique-telecoms', 'finance-comptabilite-audit', 'mines-energie-hydrocarbures',
        'commerce-marketing-vente', 'agriculture-agroalimentaire', 'genie-civil-batiment'].includes(filiere.id)
);

const filieresUniversitaires = filieresProvisoires.filter(filiere => filiere.type === 'universitaire');

export const formationsProvisoires: Formation[] = [
    creerFormation('bts-ida', 'informatique-numerique-telecoms', 'BTS Informatique — Développeur d’applications (IDA)', 'BAC+2', ['Baccalauréat, de préférence scientifique ou technique'], 24, ['Développeur d’applications', 'Technicien en informatique', 'Assistant chef de projet numérique']),
    creerFormation('bts-rit', 'informatique-numerique-telecoms', 'BTS Réseaux informatiques et télécommunications (RIT)', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien réseaux', 'Technicien télécoms', 'Administrateur systèmes junior']),
    creerFormation('bts-sei', 'informatique-numerique-telecoms', 'BTS Systèmes électroniques et informatiques (SEI)', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien en systèmes électroniques', 'Technicien de maintenance', 'Assistant intégrateur informatique']),
    creerFormation('licence-pro-genie-logiciel', 'informatique-numerique-telecoms', 'Licence professionnelle Génie logiciel', 'BAC+3', ['Baccalauréat ou diplôme équivalent'], 36, ['Développeur logiciel', 'Concepteur d’applications', 'Testeur logiciel']),
    creerFormation('master-securite-informatique', 'informatique-numerique-telecoms', 'Master Sécurité informatique', 'BAC+5', ['Licence en informatique ou diplôme équivalent'], 24, ['Analyste en cybersécurité', 'Consultant sécurité informatique', 'Administrateur sécurité']),

    creerFormation('bts-genie-civil-batiment', 'genie-civil-batiment', 'BTS Génie civil — option Bâtiment', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien bâtiment', 'Conducteur de travaux junior', 'Dessinateur-projeteur bâtiment']),
    creerFormation('bts-travaux-publics', 'genie-civil-batiment', 'BTS Travaux publics', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien travaux publics', 'Assistant conducteur de chantier', 'Métreur']),
    creerFormation('licence-pro-genie-civil', 'genie-civil-batiment', 'Licence professionnelle Génie civil', 'BAC+3', ['Baccalauréat ou diplôme équivalent'], 36, ['Conducteur de travaux', 'Chargé d’études en génie civil', 'Assistant ingénieur bâtiment']),

    creerFormation('bts-mgp', 'mines-energie-hydrocarbures', 'BTS Mines-Géologie-Pétrole (MGP)', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien géologue', 'Technicien d’exploitation minière', 'Assistant géotechnique']),
    creerFormation('bts-electrotechnique', 'mines-energie-hydrocarbures', 'BTS Électrotechnique', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien électrotechnicien', 'Technicien de maintenance électrique', 'Assistant chargé d’affaires énergie']),
    creerFormation('licence-pro-genie-energetique', 'mines-energie-hydrocarbures', 'Licence professionnelle Génie énergétique et environnement', 'BAC+3', ['Baccalauréat ou diplôme équivalent'], 36, ['Technicien supérieur en énergie', 'Assistant efficacité énergétique', 'Chargé de suivi environnemental']),

    creerFormation('bts-msp', 'genie-mecanique-maintenance', 'BTS Maintenance des systèmes de production (MSP)', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien de maintenance industrielle', 'Technicien méthodes', 'Assistant responsable maintenance']),
    creerFormation('bts-electromecanique', 'genie-mecanique-maintenance', 'BTS Électromécanique', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien électromécanicien', 'Technicien d’installation', 'Technicien de maintenance']),
    creerFormation('bts-froid-climatisation', 'genie-mecanique-maintenance', 'BTS Froid et climatisation', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien frigoriste', 'Technicien en climatisation', 'Installateur en génie climatique']),

    creerFormation('bts-agriculture-vegetale', 'agriculture-agroalimentaire', 'BTS Agriculture tropicale — option végétale', 'BAC+2', ['Baccalauréat scientifique ou agricole'], 24, ['Technicien agricole', 'Conseiller en production végétale', 'Assistant d’exploitation agricole']),
    creerFormation('bts-agriculture-animale', 'agriculture-agroalimentaire', 'BTS Agriculture tropicale — option animale', 'BAC+2', ['Baccalauréat scientifique ou agricole'], 24, ['Technicien en production animale', 'Conseiller en élevage', 'Assistant vétérinaire d’élevage']),
    creerFormation('bts-industries-agroalimentaires', 'agriculture-agroalimentaire', 'BTS Industries agroalimentaires', 'BAC+2', ['Baccalauréat scientifique ou technique'], 24, ['Technicien de production agroalimentaire', 'Contrôleur qualité', 'Assistant laboratoire agroalimentaire']),

    creerFormation('bts-fcge', 'finance-comptabilite-audit', 'BTS Finance comptabilité et gestion des entreprises (FCGE)', 'BAC+2', ['Baccalauréat, de préférence série économique'], 24, ['Assistant comptable', 'Gestionnaire de paie junior', 'Assistant financier']),
    creerFormation('licence-pro-audit-controle', 'finance-comptabilite-audit', 'Licence professionnelle Audit et contrôle de gestion', 'BAC+3', ['Baccalauréat ou diplôme équivalent'], 36, ['Contrôleur de gestion junior', 'Auditeur junior', 'Comptable']),
    creerFormation('master-cca', 'finance-comptabilite-audit', 'Master Comptabilité-Contrôle-Audit (CCA)', 'BAC+5', ['Licence en gestion, comptabilité ou équivalent'], 24, ['Auditeur financier', 'Responsable comptable', 'Contrôleur de gestion']),
    creerFormation('bts-gestion-commerciale', 'commerce-marketing-vente', 'BTS Gestion commerciale', 'BAC+2', ['Baccalauréat ou diplôme équivalent'], 24, ['Attaché commercial', 'Conseiller clientèle', 'Assistant chef de produit']),
    creerFormation('bts-commerce-international', 'commerce-marketing-vente', 'BTS Commerce international', 'BAC+2', ['Baccalauréat ou diplôme équivalent'], 24, ['Assistant import-export', 'Assistant commercial international', 'Agent de transit']),
    creerFormation('master-marketing-digital', 'commerce-marketing-vente', 'Master Marketing digital', 'BAC+5', ['Licence en marketing, communication ou équivalent'], 24, ['Responsable marketing digital', 'Chargé de stratégie de contenu', 'Consultant en acquisition numérique']),
    creerFormation('bts-logistique-transports', 'logistique-supply-chain', 'BTS Logistique et transports', 'BAC+2', ['Baccalauréat ou diplôme équivalent'], 24, ['Assistant logistique', 'Agent d’exploitation transport', 'Gestionnaire de stocks']),
    creerFormation('master-logistique', 'logistique-supply-chain', 'Master Logistique', 'BAC+5', ['Licence en logistique, gestion ou équivalent'], 24, ['Responsable supply chain', 'Responsable logistique', 'Consultant en organisation des flux']),
    creerFormation('bts-rhcom', 'ressources-humaines-communication', 'BTS Ressources humaines et communication (RHCOM)', 'BAC+2', ['Baccalauréat ou diplôme équivalent'], 24, ['Assistant ressources humaines', 'Assistant communication', 'Gestionnaire administratif']),
    creerFormation('master-grh', 'ressources-humaines-communication', 'Master Gestion des ressources humaines (GRH)', 'BAC+5', ['Licence en gestion, droit ou sciences humaines'], 24, ['Responsable ressources humaines', 'Chargé de recrutement', 'Responsable formation']),
    creerFormation('bts-assistanat-direction', 'administration-secretariat', 'BTS Assistanat de direction', 'BAC+2', ['Baccalauréat ou diplôme équivalent'], 24, ['Assistant de direction', 'Assistant administratif', 'Office manager junior']),
    creerFormation('bts-tourisme-hotellerie', 'tourisme-services', 'BTS Tourisme et hôtellerie', 'BAC+2', ['Baccalauréat ou diplôme équivalent'], 24, ['Conseiller en voyages', 'Réceptionniste', 'Assistant d’exploitation hôtelière'])
];

for (const filiere of filieresUniversitaires)
{
    const slug = filiere.id;
    formationsProvisoires.push(
        creerFormation(`licence-${slug}`, slug, `Licence ${filiere.nom}`, 'BAC+3', ['Baccalauréat ou diplôme équivalent'], 36, ['Chargé d’études junior', 'Assistant de recherche', 'Assistant de projet dans le domaine']),
        creerFormation(`master-${slug}`, slug, `Master ${filiere.nom}`, 'BAC+5', ['Licence dans le domaine ou diplôme équivalent'], 24, ['Chargé d’études', 'Consultant dans le domaine', 'Enseignant ou chercheur après poursuite d’études'])
    );
}

export const etablissementsProvisoires: Etablissement[] = [
    {
        id: 'pigier-ci', nom: 'Pigier Côte d’Ivoire', ville: 'Abidjan-Plateau', statut: 'privé',
        description: 'Établissement privé proposant des parcours professionnels en gestion, commerce et numérique.',
        localisation: 'Plateau, Abidjan', conditionsAdmission: ['Affectation/Inscription', 'Baccalauréat ou diplôme équivalent'], noteFictive: 4.1
    },
    {
        id: 'esatic', nom: 'ESATIC', ville: 'Abidjan-Treichville', statut: 'public',
        description: 'Établissement public spécialisé dans les technologies de l’information et de la communication.',
        localisation: 'Treichville, Abidjan', conditionsAdmission: ['Concours ou sélection selon la formation', 'Etude de dossier'], noteFictive: 4.2
    },
    {
        id: 'inp-hb', nom: 'INP-HB', ville: 'Yamoussoukro', statut: 'public',
        description: 'Institut public proposant des parcours scientifiques, techniques, industriels et agricoles.',
        localisation: 'Yamoussoukro', conditionsAdmission: ['Concours ou sélection selon la formation', 'Etude de dossier'], noteFictive: 4.3
    },
    {
        id: 'uvci', nom: 'Université Virtuelle de Côte d’Ivoire', ville: 'Abidjan-Cocody', statut: 'public',
        description: 'Université publique proposant des parcours universitaires avec des modalités d’enseignement à distance.',
        localisation: 'Cocody, Abidjan', conditionsAdmission: ['Baccalauréat ou diplôme équivalent', 'Modalités à vérifier pour chaque parcours'], noteFictive: 3.9
    },
    {
        id: 'esgis', nom: 'ESGIS', ville: 'Abidjan', statut: 'privé',
        description: 'Établissement privé proposant des parcours en informatique, gestion et commerce.',
        localisation: 'Abidjan', conditionsAdmission: ['Étude du dossier', 'Baccalauréat ou diplôme équivalent'], noteFictive: 4.0
    },
    {
        id: 'iua', nom: 'IUA', ville: 'Abidjan', statut: 'privé',
        description: 'Établissement privé proposant des parcours professionnels et universitaires.',
        localisation: 'Abidjan', conditionsAdmission: ['Étude du dossier', 'Affectation/Inscription'], noteFictive: 3.8
    },
    {
        id: 'ufhb', nom: 'Université Félix Houphouët-Boigny', ville: 'Abidjan-Cocody', statut: 'public',
        description: 'Université publique proposant des formations relevant de plusieurs unités de formation et de recherche.',
        localisation: 'Cocody, Abidjan', conditionsAdmission: ['Baccalauréat ou diplôme équivalent', 'Conditions selon la filière'], noteFictive: 4.2
    }
];

function creerOffres(
    etablissementId: string,
    formationIds: string[],
    fraisBaseFictifs: number,
    tauxReussiteBaseFictif: number,
    tauxInsertionBaseFictif: number
): OffreFormationEtablissement[]
{
    return formationIds.map((formationId, index) => ({
        etablissementId,
        formationId,
        fraisScolariteAnnuelsFictifs: fraisBaseFictifs + index * 25000,
        tauxReussiteFictif: Math.min(90, tauxReussiteBaseFictif + index * 2),
        tauxInsertionFictif: Math.min(88, tauxInsertionBaseFictif + index * 2)
    }));
}

export const offresFormationEtablissement: OffreFormationEtablissement[] = [
    ...creerOffres('pigier-ci', ['bts-fcge', 'bts-gestion-commerciale', 'bts-commerce-international', 'bts-rhcom', 'bts-assistanat-direction', 'licence-pro-audit-controle'], 420000, 68, 61),
    ...creerOffres('esatic', ['bts-ida', 'bts-rit', 'bts-sei', 'licence-pro-genie-logiciel', 'master-securite-informatique', 'bts-electrotechnique'], 180000, 70, 64),
    ...creerOffres('inp-hb', ['bts-genie-civil-batiment', 'bts-travaux-publics', 'bts-mgp', 'bts-electrotechnique', 'bts-msp', 'bts-electromecanique', 'bts-agriculture-vegetale', 'bts-industries-agroalimentaires'], 160000, 72, 66),
    ...creerOffres('uvci', ['licence-mathematiques-informatique', 'master-mathematiques-informatique', 'licence-sciences-economiques', 'master-sciences-economiques', 'licence-sciences-gestion', 'master-sciences-gestion'], 125000, 65, 58),
    ...creerOffres('esgis', ['bts-ida', 'bts-fcge', 'bts-gestion-commerciale', 'bts-logistique-transports', 'bts-rhcom', 'licence-pro-genie-logiciel'], 390000, 67, 60),
    ...creerOffres('iua', ['bts-ida', 'bts-genie-civil-batiment', 'bts-fcge', 'bts-tourisme-hotellerie', 'bts-logistique-transports', 'bts-assistanat-direction'], 400000, 66, 59),
    ...creerOffres('ufhb', ['licence-mathematiques-informatique', 'master-mathematiques-informatique', 'licence-physique-chimie-materiaux', 'master-physique-chimie-materiaux', 'licence-biosciences', 'master-biosciences', 'licence-droit-public', 'master-droit-public'], 110000, 69, 62)
];

export const filtresFraisFictifs: FraisFilterOption[] = [
    { valeur: 350000, libelle: 'Jusqu’à 350 000 FCFA/an' },
    { valeur: 500000, libelle: 'Jusqu’à 500 000 FCFA/an' },
    { valeur: 700000, libelle: 'Jusqu’à 700 000 FCFA/an' }
];

export const questionsQuizProvisoires: QuestionQuiz[] = [
    {
        id: 'sujet-prefere', etape: 'centres',
        question: 'Quels sujets aimeriez-vous explorer dans vos études ?',
        options: [
            { valeur: 'technologie', libelle: 'Informatique, numérique et technologies', poidsParFiliere: poidsPour(['informatique-numerique-telecoms', 'mathematiques-informatique'], 4) },
            { valeur: 'industrie', libelle: 'Bâtiment, énergie et équipements', poidsParFiliere: poidsPour(['genie-civil-batiment', 'mines-energie-hydrocarbures', 'genie-mecanique-maintenance'], 4) },
            { valeur: 'agriculture', libelle: 'Agriculture, alimentation et environnement', poidsParFiliere: poidsPour(['agriculture-agroalimentaire', 'sciences-terre-ressources-minieres', 'biosciences'], 4) }
        ]
    },
    {
        id: 'domaine-attire', etape: 'centres',
        question: 'Quel domaine vous attire le plus ?',
        options: [
            { valeur: 'entreprise', libelle: 'Entreprise, commerce et gestion', poidsParFiliere: poidsPour([...idsTertiaires, 'sciences-economiques', 'sciences-gestion'], 4) },
            { valeur: 'sante-sciences', libelle: 'Sciences du vivant et santé', poidsParFiliere: poidsPour(['biosciences', 'sciences-medicales', 'agriculture-agroalimentaire'], 4) },
            { valeur: 'societe-culture', libelle: 'Droit, société, langues et culture', poidsParFiliere: poidsPour(['droit-public', 'droit-prive', 'sciences-politiques', 'lettres-modernes', 'langues-vivantes', 'arts', 'sociologie-anthropologie', 'philosophie', 'histoire-geographie'], 4) }
        ]
    },
    {
        id: 'activite-interet', etape: 'centres',
        question: 'Quelle activité vous motive le plus ?',
        options: [
            { valeur: 'concevoir', libelle: 'Concevoir ou réparer des solutions concrètes', poidsParFiliere: poidsPour([...idsIndustriels, 'physique-chimie-materiaux'], 3) },
            { valeur: 'organiser', libelle: 'Organiser des projets et des échanges', poidsParFiliere: poidsPour([...idsTertiaires, 'sciences-gestion'], 3) },
            { valeur: 'comprendre', libelle: 'Comprendre les personnes, les sociétés ou le vivant', poidsParFiliere: poidsPour([...idsUniversitaires], 3) }
        ]
    },
    {
        id: 'force-logique', etape: 'competences',
        question: 'Quelle compétence décrit le mieux vos points forts ?',
        options: [
            { valeur: 'raisonnement', libelle: 'Raisonner et résoudre des problèmes', poidsParFiliere: poidsPour([...idsIndustriels, 'mathematiques-informatique', 'physique-chimie-materiaux'], 4) },
            { valeur: 'organisation', libelle: 'Organiser et gérer des activités', poidsParFiliere: poidsPour([...idsTertiaires, 'sciences-gestion'], 4) },
            { valeur: 'expression', libelle: 'M’exprimer, argumenter et communiquer', poidsParFiliere: poidsPour(['ressources-humaines-communication', 'administration-secretariat', 'droit-public', 'droit-prive', 'sciences-politiques', 'lettres-modernes', 'langues-vivantes'], 4) }
        ]
    },
    {
        id: 'mode-travail', etape: 'competences',
        question: 'Dans quel type de travail vous sentez-vous le plus à l’aise ?',
        options: [
            { valeur: 'pratique', libelle: 'Manipuler, fabriquer ou intervenir sur le terrain', poidsParFiliere: poidsPour([...idsIndustriels], 4) },
            { valeur: 'analyse', libelle: 'Analyser des données, des textes ou des situations', poidsParFiliere: poidsPour([...idsUniversitaires, 'finance-comptabilite-audit'], 3) },
            { valeur: 'relationnel', libelle: 'Accompagner des personnes et travailler en équipe', poidsParFiliere: poidsPour([...idsTertiaires, 'sciences-medicales', 'biosciences', 'sociologie-anthropologie'], 3) }
        ]
    },
    {
        id: 'matiere-preferee', etape: 'competences',
        question: 'Quelle famille de matières vous intéresse le plus ?',
        options: [
            { valeur: 'sciences', libelle: 'Mathématiques et sciences expérimentales', poidsParFiliere: poidsPour([...idsIndustriels, 'mathematiques-informatique', 'physique-chimie-materiaux', 'sciences-terre-ressources-minieres'], 3) },
            { valeur: 'economie-droit', libelle: 'Économie, gestion et droit', poidsParFiliere: poidsPour([...idsTertiaires, 'droit-public', 'droit-prive', 'sciences-politiques', 'sciences-economiques', 'sciences-gestion'], 3) },
            { valeur: 'lettres-vivant', libelle: 'Langues, lettres, histoire ou sciences de la vie', poidsParFiliere: poidsPour(['agriculture-agroalimentaire', 'biosciences', 'sciences-medicales', 'lettres-modernes', 'langues-vivantes', 'arts', 'sociologie-anthropologie', 'philosophie', 'histoire-geographie'], 3) }
        ]
    },
    {
        id: 'budget', etape: 'preferences',
        question: 'Quelle est votre préférence concernant le budget de formation ?',
        options: [
            { valeur: 'public', libelle: 'Je privilégie les établissements publics', poidsParFiliere: poidsPour([...idsIndustriels, ...idsTertiaires, ...idsUniversitaires], 1) },
            { valeur: 'accessible', libelle: 'Je recherche des frais modérés', poidsParFiliere: poidsPour([...idsIndustriels, ...idsTertiaires, ...idsUniversitaires], 1) },
            { valeur: 'flexible', libelle: 'Mon budget est flexible', poidsParFiliere: poidsPour([...idsIndustriels, ...idsTertiaires, ...idsUniversitaires], 1) }
        ]
    },
    {
        id: 'duree', etape: 'preferences',
        question: 'Quelle durée d’études envisagez-vous ?',
        options: [
            { valeur: 'courte', libelle: 'Un parcours court (BAC+2)', poidsParFiliere: poidsPour([...idsIndustriels, ...idsTertiaires], 2) },
            { valeur: 'moyenne', libelle: 'Un parcours de niveau Licence (BAC+3)', poidsParFiliere: poidsPour([...idsIndustriels, ...idsTertiaires, ...idsUniversitaires], 2) },
            { valeur: 'longue', libelle: 'Un parcours jusqu’au Master ou diplôme d’ingénieur (BAC+5)', poidsParFiliere: poidsPour([...idsIndustriels, ...idsTertiaires, ...idsUniversitaires], 2) }
        ]
    },
    {
        id: 'type-filiere', etape: 'preferences',
        question: 'Quel type de filière souhaitez-vous explorer ?',
        options: [
            { valeur: 'industrielle', libelle: 'Industrielle', poidsParFiliere: poidsPour(idsIndustriels, 5) },
            { valeur: 'tertiaire', libelle: 'Tertiaire', poidsParFiliere: poidsPour(idsTertiaires, 5) },
            { valeur: 'universitaire', libelle: 'Universitaire (UFR)', poidsParFiliere: poidsPour(idsUniversitaires, 5) },
            { valeur: 'indifferent', libelle: 'Sans préférence', poidsParFiliere: poidsPour([...idsIndustriels, ...idsTertiaires, ...idsUniversitaires], 1) }
        ]
    }
];
