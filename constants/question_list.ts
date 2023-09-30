const questions_list = [
    {
        id: '1',
        key: 'genre',
        question: 'What is your preferred Movie Genre?',
        options: [
            { id: 'action', title: 'Action' },
            { id: 'comedy', title: 'Comedy' },
            { id: 'thriller', title: 'Thriller' },

        ]
    },

    {
        id: '2',
        key: 'setting',
        question: 'What is your preferred movie setting?',
        options: [
            { id: 'contemporary', title: 'Contemporary' },
            { id: 'historical', title: 'Historical' },
            { id: 'futuristic', title: 'Futuristic' },
        ]
    },

    {
        id: '3',
        key:'pace',
        question: "How do you like your movies paced?",
        options: [
            { id: 'fast-paced', title: 'Fast-paced and Action-Packed' },
            { id: 'balanced', title: 'Balanced with action and dialogue' },
            { id: 'slow', title: 'Slow and character-driven' },
        ]
    },
    {
        id: '4',
        key: 'tone',
        question: 'What is your preferred movie tone?',
        options: [
            { id: 'light', title: 'Light-hearted and Comedic' },
            { id: 'dark', title: 'Dark and Gritty' },
            { id: 'suspenseful', title: 'Suspenseful and Intense' }
        ]
    },

]


export default questions_list