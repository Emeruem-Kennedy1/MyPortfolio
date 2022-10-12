import passlock from '../../assets/passlock.png';
import weatherly from '../../assets/weatherly.png';
import flashcardapp from '../../assets/flashcardapp.png';
import learndotcom from '../../assets/learn.com.png';
import quotesGenerator from '../../assets/random_quotes_gen.png';

const myProjects = [
    {
        id: 1,
        name: 'FlashCard',
        description: 'A simple Ios app that helps sudents study for tests/ exams using flashcards. Students can add delete and edit flashcards. This app is built using Swift.',
        techStack: ['swift'],
        image: flashcardapp,
        link: 'https://github.com/Emeruem-Kennedy1/Flashcard-App'
    },
    {
        id: 2,
        name: 'Weatherly',
        description: 'A simple Weather app that displays weather forcast for 7days and every hour for 24 hours for a given location. It is built using HTMl, SCSS, javascript, and openweathermap.org API.',
        techStack: ['html', 'css', 'javascript'],
        image: weatherly,
        link: 'https://weatherlyloaction.netlify.app/'
    },
    {
        id: 3,
        name: 'Learn.com',
        description: 'A simple website that helps students learn math by providing them with a variety of math topics with curated list links to youtube videos and an assesment after each topic.',
        techStack: ['ejs', 'Bootstrap', 'nodejs', 'express', 'mongoose'],
        image: learndotcom,
        link: 'https://learn-dot-com.github.io/Learndotcom/'
    },
    {
        id: 4,
        name: 'Quotes Generator',
        description: 'This app allows users to generate random quotes from a list of famous people and famous quotes. This app is built using HTML, CSS, Javascript, and the Quotes API.',
        image: quotesGenerator,
        link: 'https://emeruem-kennedy1.github.io/Random-Quotes-Generator/'
       
    },
    {
        id: 5,
        name: 'PassLock',
        description: 'This is a web application that allows users to store and retrieve passwords for their important services. This abb is built using mongoDB, EJS, express, and nodejs.',
        image: passlock, 
        link: 'https://password-manager-frontend.herokuapp.com/'
    }
]

export default myProjects;
