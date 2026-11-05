import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'decouvrir',
        title: 'Découvrir',
        type: 'basic',
        icon: 'heroicons_outline:view-boards',
        link: '/decouvrir'
    },


    {
        id: 'filieres',
        title: 'Filières',
        type: 'basic',
        icon: 'heroicons_outline:collection',
        link: '/filieres'
    },

    {
        id: 'actualites',
        title: 'Actualités',
        type: 'basic',
        icon: 'heroicons_outline:puzzle',
        link: '/actualites'
    },


];

export const compactNavigation: FuseNavigationItem[] = [
    // {
    //     id: 'Mon ',
    //     title: 'Example',
    //     type: 'basic',
    //     icon: 'heroicons_outline:chart-pie',
    //     link: '/example'
    // },


    // {
    //     id: 'actualites',
    //     title: 'Actualites',
    //     type: 'basic',
    //     icon: 'heroicons_outline:clipboard-document-list',
    //     link: '/actualites'
    // }
];

export const futuristicNavigation: FuseNavigationItem[] = [
    // {
    //     id: 'example',
    //     title: 'Example',
    //     type: 'basic',
    //     icon: 'heroicons_outline:chart-pie',
    //     link: '/example'
    // },


    // {
    //     id: 'actualites',
    //     title: 'Actualites',
    //     type: 'basic',
    //     icon: 'heroicons_outline:clipboard-document-list',
    //     link: '/actualites'
    // }
];

export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'decouvrir',
        title: 'Découvrir',
        type: 'basic',
        icon: 'heroicons_outline:office-building',
        link: '/decouvrir'
    },


    {
        id: 'filieres',
        title: 'Filières',
        type: 'basic',
        icon: 'heroicons_outline:view-grid',
        link: '/filieres'
    },



    {
        id: 'actualites',
        title: 'Actualités',
        type: 'basic',
        icon: 'heroicons_outline:bell',
        link: '/actualites'
    },
];
