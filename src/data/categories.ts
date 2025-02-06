import img1 from '../assets/card/startquize.jpg';

import img2 from '../assets/card/learn.jpg';

import img3 from '../assets/card/wallpaper.jpg';
import img4 from '../assets/card/book.jpg';

import {Article} from '../types';

export const categoriesData = [
  {
    image: require('../assets/categories/math.png'),
    name: 'Mathematics',
  },
  {
    image: require('../assets/categories/science.png'),
    name: 'Science',
  },
  {
    image: require('../assets/categories/english.png'),
    name: 'English',
  },
  {
    image: require('../assets/categories/technology.png'),
    name: 'Technology',
  },
  {
    image: require('../assets/categories/medicalBox.png'),
    name: 'Medical',
  },
  {
    image: require('../assets/categories/programming.png'),
    name: 'C Programming',
  },
  {
    image: require('../assets/categories/art.png'),
    name: 'Art',
  },
  {
    image: require('../assets/categories/coding.png'),
    name: 'Coding',
  },
  {
    image: require('../assets/categories/spports.png'),
    name: 'Sports',
  },
  {
    image: require('../assets/categories/knowledge.png'),
    name: 'General Knowledge',
  },
];

export const categoriesShortData = [
  {
    image: require('../assets/categories/math.png'),
    name: 'Mathematics',
  },
  {
    image: require('../assets/categories/science.png'),
    name: 'Science',
  },
  {
    image: require('../assets/categories/spports.png'),
    name: 'Sports',
  },
  {
    image: require('../assets/categories/technology.png'),
    name: 'Technology',
  },
  {
    image: require('../assets/categories/knowledge.png'),
    name: 'General Knowledge',
  },
  {
    image: require('../assets/categories/coding.png'),
    name: 'Coding',
  },
];


export const articles: Article[] = [
  {
    title: 'Play, learn and explore with exciting quizzes',
    backgroundImage: img1,
  },
  {title: 'Discover Fun Learning Activities', backgroundImage: img2},
  {title: 'Engage with Interactive Quizzes', backgroundImage: img3},
  {title: 'Engage with Interactive Quizzes', backgroundImage: img4},
];

export const technologyshortCardData = [
  {
    image: require('../assets/card/startquize.jpg'),
    title: 'Get Smarter with Science Quiz',
    description:
      '08 questions. 15 minutes. Challenge yourself and enhance your knowledge!',
  },
  {
    image: require('../assets/card/book.jpg'),
    title: 'Unlock Your Creativity',
    description:
      'Join our creativity workshop to explore innovative ideas and solutions.',
  },
  {
    image: require('../assets/card/wallpaper.jpg'),
    title: 'Master Math Concepts',
    description:
      '10 problems to solve in 20 minutes. Boost your math skills today!',
  },
  {
    image: require('../assets/card/book.jpg'),
    title: 'Explore New Opportunities',
    description:
      'Participate in our career development seminar and open new doors.',
  },
];
