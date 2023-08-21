const questions_list = [
    {
        question: 'What is your preferred Movie Genre?',
        options: [
            {id: 'action' ,title:'Action'},
            {id: 'comedy', title:'Comedy'},
            {id: 'drama', title: 'Drama'},
            {id: 'romance', title: 'Romance'},
            {id: 'sci-fi', title: "Sci-Fi"},
            {id: 'thriller', title:'Thriller'},
            {id: 'horror', title:'Horror'},
            {id: 'adventure', title: 'Adventure'},
            {id:'animation', title: 'Animation'},
            {id: 'others', title:'Others'}
        ]
    },

    {
        question: 'What is your preferred movie setting?',
        options: [
            {id: 'contemporary', title:'Contemporary'},
            {id: 'historical', title:'Historical'},
            {id: 'futuristic', title:'Futuristic'},
            {id: 'other', title:'Other'},
        ]
    },

    {
        question: "How do you like your movies paced?",
        options: [
            {id:'fast-paced', title:'Fast-paced and Action-Packed'},
            {id:'balanced', title:'Balanced with action and dialogue'},
            {id:'slow', title:'Slow and character-driven'},
        ]
    },
    {
        question: 'What is your preferred movie tone?',
        options: [
            {id:'light', title:'Light-hearted and Comedic'},
            {id:'dark', title:'Dark and Gritty'},
            {id:'inspirational', title: 'Inspirational and Uplifting'},
            {id: 'suspenseful', title: 'Suspenseful and Intense'}
        ]
    },
    {
        question: 'What is your preferred movie rating?',
        options: [
            {id:'g', title:'G (General Audience)'},
            {id:'pg', title:'PG (Parental Guidance)'},
            {id:'pg-13', title:'PG-13 (Parents Strongly Cautioned)'},
            {id:'r', title:'R (Restricted)'},
        ]
    },

    {
        question: 'Do you prefer movies with a strong plot twist or a predictable storyline?',
        options: [
            {id:'strong-plot', title:'Strong Plot Twist'},
            {id:'predictable', title:'Predictable Storyline'},
            {id:'no-preference', title:'No Preference'},
        ]
        
    }
]


export default questions_list