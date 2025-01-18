// src/data/features.ts

export interface Feature {
    title: string;
    id: string;
    description: string;
    imageUrl: string;
}

export const features: Feature[] = [
    {
        title: 'Simple and Intuitive Interface',
        id: 'simple-ui',
        description:
            'QuickNotes offers a clean and user-friendly interface that allows you to focus on taking notes without distractions.',
        imageUrl:
            'https://unsplash.com/photos/cheese-plant-leaf-in-clear-glass-vase-m2J105CzEAU?w=800&auto=format',
    },
    {
        title: 'Organize Notes with Tags',
        id: 'tags',
        description:
            'Easily categorize your notes using custom tags for better organization and quick access to related content.',
        imageUrl:
            'https://unsplash.com/photos/yellow-sticky-notes-beside-white-apple-magic-mouse-and-white-apple-keyboard--nz-GTuvyBw?w=800&auto=format',
    },
    {
        title: 'Dark and Light Mode',
        id: 'dark-mode',
        description:
            'Switch between dark and light themes to suit your environment and reduce eye strain.',
        imageUrl:
            'https://unsplash.com/photos/black-and-white-remote-control-psKil0FkS58?w=800&auto=format',
    },
    {
        title: 'Quick Search and Filter',
        id: 'search-filter',
        description:
            'Quickly find your notes using the powerful search and filter feature for better productivity.',
        imageUrl:
            'https://unsplash.com/photos/clear-glass-coffee-filter-_FilM6g6DEQ?w=800&auto=format',
    }
]
