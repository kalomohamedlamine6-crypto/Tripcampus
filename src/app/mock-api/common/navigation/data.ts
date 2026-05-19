import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'accueil',
        title: 'Accueil',
        type: 'basic',
        icon: 'mat_outline:home',
        link: '/accueil',
        
        
    },

    {
        id: 'espace',
        title: 'Mon Espace',
        type: 'basic',
        icon: 'heroicons_outline:view-boards',
        link: '/espace'
    },

    
    {
        id: 'activite',
        title: 'Activites/Evenements',
        type: 'basic',
        icon: 'heroicons_outline:puzzle',
        link: '/activite'
    },

    {
        id: 'bibliotheque',
        title: 'Bibliotheque',
        type: 'basic',
        icon: 'heroicons_outline:collection',
        link: '/bibliotheque'
    },

    {
        id: 'fil',
        title: 'Fil actu',
        type: 'basic',
        icon: 'heroicons_outline:film',
        link: '/fil'
    },

    {
        id: 'chat',
        title: 'Chat',
        type: 'basic',
        icon: 'heroicons_outline:chat-alt-2',
        link: '/chat'
    }


];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'Mon ',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    },

   
    {
        id: 'activite',
        title: 'Activite',
        type: 'basic',
        icon: 'heroicons_outline:clipboard-document-list',
        link: '/activite'
    }
];

export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    },

   
    {
        id: 'activite',
        title: 'Activite',
        type: 'basic',
        icon: 'heroicons_outline:clipboard-document-list',
        link: '/activite'
    }
];

export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    },

    
    {
        id: 'activite',
        title: 'Activite',
        type: 'basic',
        icon: 'heroicons_outline:clipboard-document-list',
        link: '/activite'
    }
];