import {AllQuizData, CheckboxItem, Question} from '../types';

export const mathematicsData: Question[] = [
  {
    id: '1',
    questionText:
      'If two dice are rolled, what is the probability of getting a sum of 7?',
    options: ['1/6', '1/12', '1/18', '1/36'],
    correctAnswer: '1/6',
  },
  {
    id: '2',
    questionText:
      'A box contains 3 red, 2 blue, and 5 green balls. What is the probability of randomly selecting a blue ball?',
    options: ['1/5', '1/4', '1/2', '2/10'],
    correctAnswer: '1/5',
  },
  {
    id: '3',
    questionText: 'What is 12 / 4?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '3',
  },
  {
    id: '4',
    questionText: 'What is the square root of 16?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
  },
  {
    id: '5',
    questionText: 'What is the integral of f(x) = 2x?',
    options: ['x^2 + C', '2x + C', 'x^2', '2x^2 + C'],
    correctAnswer: 'x^2 + C',
  },
  {
    id: '6',
    questionText:
      'The sum of the first 10 terms of an arithmetic sequence is 120. What is the first term if the common difference is 4?',
    options: ['8', '6', '10', '12'],
    correctAnswer: '6',
  },
  {
    id: '7',
    questionText: 'What is the solution to the equation x^2 - 5x + 6 = 0?',
    options: ['(2, 3)', '(1, 6)', '(3, 2)', '(0, 5)'],
    correctAnswer: '(2, 3)',
  },
  {
    id: '8',
    questionText: 'If a triangle has sides of lengths 3, 4, and 5, what is the area?',
    options: ['6', '12', '10', '7'],
    correctAnswer: '6',
  },
  {
    id: '9',
    questionText: 'What is the value of sin 45°?',
    options: ['1/2', '√2/2', '1', '√3/2'],
    correctAnswer: '√2/2',
  },
  {
    id: '10',
    questionText: 'What is 12 / 4?',
    options: ['2', '3', '4', '6'],
    correctAnswer: '3',
  }
];


export const scienceData: Question[] = [
  {
    id: '1',
    questionText: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    id: '2',
    questionText: 'What is the chemical symbol for water?',
    options: ['O2', 'H2O', 'CO2', 'NaCl'],
    correctAnswer: 'H2O',
  },
  {
    id: '3',
    questionText: 'What gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    id: '4',
    questionText: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
    correctAnswer: 'Mitochondria',
  },
  {
    id: '5',
    questionText: 'Which organ is responsible for pumping blood throughout the body?',
    options: ['Liver', 'Kidney', 'Heart', 'Lungs'],
    correctAnswer: 'Heart',
  },
  {
    id: '6',
    questionText: 'Which law states that energy cannot be created or destroyed?',
    options: ['Newton\'s First Law', 'Law of Conservation of Energy', 'Boyle\'s Law', 'Archimedes\' Principle'],
    correctAnswer: 'Law of Conservation of Energy',
  },
  {
    id: '7',
    questionText: 'Which law states that energy cannot be created or destroyed?',
    options: ['Newton\'s First Law', 'Law of Conservation of Energy', 'Boyle\'s Law', 'Archimedes\' Principle'],
    correctAnswer: 'Law of Conservation of Energy',
  },
  {
    id: '8',
    questionText: 'What is the chemical formula for methane?',
    options: ['CH4', 'C2H6', 'CO2', 'C6H12O6'],
    correctAnswer: 'CH4',
  },
  {
    id: '9',
    questionText: 'Which of the following is an example of a physical change?',
    options: ['Burning wood', 'Rusting iron', 'Melting ice', 'Digesting food'],
    correctAnswer: 'Melting ice',
  },
  {
    id: '10',
    questionText: 'Which of the following is an example of a physical change?',
    options: ['Burning wood', 'Rusting iron', 'Melting ice', 'Digesting food'],
    correctAnswer: 'Melting ice',
  },
];


export const englishData: Question[] = [
  {
    id: '1',
    questionText: 'Which of the following is the correct spelling?',
    options: ['Definately', 'Definitely', 'Definitly', 'Definately'],
    correctAnswer: 'Definitely',
  },
  {
    id: '2',
    questionText: 'Which word is the antonym of "happy"?',
    options: ['Sad', 'Angry', 'Excited', 'Joyful'],
    correctAnswer: 'Sad',
  },
  {
    id: '3',
    questionText: 'What is the plural form of "child"?',
    options: ['Children', 'Childs', 'Childeren', 'Childrens'],
    correctAnswer: 'Children',
  },
  {
    id: '4',
    questionText: 'Which of the following is a compound sentence?',
    options: ['I went to the market.', 'I went to the market and I bought apples.', 'I went to the market.', 'She is reading.'],
    correctAnswer: 'I went to the market and I bought apples.',
  },
  {
    id: '5',
    questionText: 'What is the main theme of "Romeo and Juliet"?',
    options: ['Love and fate', 'Friendship and rivalry', 'Wealth and status', 'Power and politics'],
    correctAnswer: 'Love and fate',
  },
  {
    id: '6',
    questionText: 'Which part of speech is the word "quickly" in the sentence "She ran quickly"?',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 'Adverb',
  },
  {
    id: '7',
    questionText: 'Which sentence is in the passive voice?',
    options: ['The teacher gave me the book.', 'The book was given to me by the teacher.', 'I gave the teacher the book.', 'I was reading the book.'],
    correctAnswer: 'The book was given to me by the teacher.',
  },
  {
    id: '8',
    questionText: 'Which punctuation mark is used at the end of a question?',
    options: ['Period', 'Comma', 'Exclamation mark', 'Question mark'],
    correctAnswer: 'Question mark',
  },
  {
    id: '9',
    questionText: 'Which word is a synonym for "fast"?',
    options: ['Quick', 'Slow', 'Boring', 'Heavy'],
    correctAnswer: 'Quick',
  },
  {
    id: '10',
    questionText: 'What is the correct form of the verb in the sentence: "She ___ to the store."',
    options: ['go', 'goes', 'going', 'gone'],
    correctAnswer: 'goes',
  },
];

export const technologyData: Question[] = [
  {
    id: '1',
    questionText: 'What is JSX in React?',
    options: ['A JavaScript function', 'A syntax extension for JavaScript', 'A CSS preprocessor', 'A React component'],
    correctAnswer: 'A syntax extension for JavaScript',
  },
  {
    id: '2',
    questionText: 'Which hook in React is used to manage state in functional components?',
    options: ['useEffect', 'useContext', 'useState', 'useReducer'],
    correctAnswer: 'useState',
  },
  {
    id: '3',
    questionText: 'What is the default port number for HTTP?',
    options: ['21', '80', '443', '8080'],
    correctAnswer: '80',
  },
  {
    id: '4',
    questionText: 'In React Native, which of the following is used to navigate between screens?',
    options: ['react-navigation', 'react-router', 'navigator', 'react-router-dom'],
    correctAnswer: 'react-navigation',
  },
  {
    id: '5',
    questionText: 'What does SQL stand for?',
    options: ['Structured Query Language', 'System Query Language', 'Secure Query Language', 'Simple Query Language'],
    correctAnswer: 'Structured Query Language',
  },
  {
    id: '6',
    questionText: 'Which JavaScript method is used to parse a JSON string into a JavaScript object?',
    options: ['JSON.stringify()', 'JSON.parse()', 'JSON.objectify()', 'parseJSON()'],
    correctAnswer: 'JSON.parse()',
  },
  {
    id: '7',
    questionText: 'Which of the following is a block-level element in HTML?',
    options: ['span', 'a', 'div', 'img'],
    correctAnswer: 'div',
  },
  {
    id: '8',
    questionText: 'Which CSS property is used to change the background color of an element?',
    options: ['background-color', 'color', 'bg-color', 'background'],
    correctAnswer: 'background-color',
  },
  {
    id: '9',
    questionText: 'Which of the following is not a NoSQL database?',
    options: ['MongoDB', 'Redis', 'MySQL', 'Cassandra'],
    correctAnswer: 'MySQL',
  },
  {
    id: '10',
    questionText: 'Which HTML tag is used to link an external CSS file to a webpage?',
    options: ['<css>', '<style>', '<link>', '<script>'],
    correctAnswer: '<link>',
  },
];


export const medicalData: Question[] = [
  {
    id: '1',
    questionText: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
    correctAnswer: 'Mitochondria',
  },
  {
    id: '2',
    questionText: 'Which blood type is considered the universal donor?',
    options: ['A', 'B', 'O-', 'AB+'],
    correctAnswer: 'O-',
  },
  {
    id: '3',
    questionText: 'What is the main function of red blood cells?',
    options: [
      'Fight infections',
      'Carry oxygen',
      'Regulate blood sugar',
      'Produce antibodies',
    ],
    correctAnswer: 'Carry oxygen',
  },
  {
    id: '4',
    questionText:
      'Which organ is responsible for filtering and detoxifying the blood?',
    options: ['Heart', 'Liver', 'Kidney', 'Lungs'],
    correctAnswer: 'Liver',
  },
  {
    id: '5',
    questionText: 'Which vitamin is essential for blood clotting?',
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin K'],
    correctAnswer: 'Vitamin K',
  },
  {
    id: '6',
    questionText: 'Which part of the brain controls balance and coordination?',
    options: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Hypothalamus'],
    correctAnswer: 'Cerebellum',
  },
  {
    id: '7',
    questionText: 'What is the normal pH range of human blood?',
    options: ['6.8-7.2', '7.35-7.45', '7.5-8.0', '6.0-6.5'],
    correctAnswer: '7.35-7.45',
  },
  {
    id: '8',
    questionText: 'Which part of the immune system produces antibodies?',
    options: ['T-cells', 'B-cells', 'Macrophages', 'Neutrophils'],
    correctAnswer: 'B-cells',
  },
  {
    id: '9',
    questionText: 'Which is the largest organ in the human body?',
    options: ['Heart', 'Liver', 'Skin', 'Brain'],
    correctAnswer: 'Skin',
  },
  {
    id: '10',
    questionText: 'What is the main function of the kidney?',
    options: ['Filter waste from the blood', 'Produce digestive enzymes', 'Regulate hormones', 'Store nutrients'],
    correctAnswer: 'Filter waste from the blood',
  },
];

export const programmingData: Question[] = [
  {
    id: '1',
    questionText: 'Which of the following is a statically typed language?',
    options: ['Python', 'JavaScript', 'Java', 'Ruby'],
    correctAnswer: 'Java',
  },
  {
    id: '2',
    questionText:
      "What is the main purpose of the 'use strict' directive in JavaScript?",
    options: [
      'To enable new ES6 features',
      'To enforce strict data typing',
      'To prevent the use of undeclared variables',
      'To allow global variables',
    ],
    correctAnswer: 'To prevent the use of undeclared variables',
  },
  {
    id: '3',
    questionText: 'Which symbol is used for comments in Python?',
    options: ['//', '#', '/* */', '<!-- -->'],
    correctAnswer: '#',
  },
  {
    id: '4',
    questionText: 'Which of the following is not a valid data type in JavaScript?',
    options: ['String', 'Number', 'Boolean', 'Character'],
    correctAnswer: 'Character',
  },
  {
    id: '5',
    questionText: 'In Java, what is the default value of a boolean variable?',
    options: ['true', 'false', 'null', 'undefined'],
    correctAnswer: 'false',
  },
  {
    id: '6',
    questionText: 'Which of the following is used to define a function in Python?',
    options: ['def', 'function', 'func', 'method'],
    correctAnswer: 'def',
  },
  {
    id: '7',
    questionText: 'Which of the following programming languages is primarily used for web development?',
    options: ['Java', 'C++', 'JavaScript', 'Go'],
    correctAnswer: 'JavaScript',
  },
  {
    id: '8',
    questionText: 'In C++, which operator is used for memory allocation?',
    options: ['malloc()', 'alloc()', 'new', 'create()'],
    correctAnswer: 'new',
  },
  {
    id: '9',
    questionText: 'Which of the following is not an object-oriented programming language?',
    options: ['Python', 'Java', 'C', 'Ruby'],
    correctAnswer: 'C',
  },
  {
    id: '10',
    questionText: 'Which language is primarily used for web page styling?',
    options: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    correctAnswer: 'CSS',
  },
];


export const artData: Question[] = [
  {
    id: '1',
    questionText: 'Who painted the Mona Lisa?',
    options: [
      'Vincent van Gogh',
      'Leonardo da Vinci',
      'Pablo Picasso',
      'Claude Monet',
    ],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    id: '2',
    questionText: 'What art movement is Salvador Dalí associated with?',
    options: ['Impressionism', 'Surrealism', 'Cubism', 'Expressionism'],
    correctAnswer: 'Surrealism',
  },
  {
    id: '3',
    questionText: 'Which artist painted "Starry Night"?',
    options: [
      'Vincent van Gogh',
      'Paul Cézanne',
      'Henri Matisse',
      'Gustav Klimt',
    ],
    correctAnswer: 'Vincent van Gogh',
  },
  {
    id: '4',
    questionText: 'Which painting is also known as "La Gioconda"?',
    options: [
      'The Scream',
      'The Birth of Venus',
      'The Persistence of Memory',
      'Mona Lisa',
    ],
    correctAnswer: 'Mona Lisa',
  },
  {
    id: '5',
    questionText: 'Which artist is known for his "Blue Period"?',
    options: [
      'Pablo Picasso',
      'Jackson Pollock',
      'Edgar Degas',
      'Marc Chagall',
    ],
    correctAnswer: 'Pablo Picasso',
  },
  {
    id: '6',
    questionText: 'In which city is the Louvre Museum located?',
    options: ['London', 'Rome', 'Paris', 'New York'],
    correctAnswer: 'Paris',
  },
  {
    id: '7',
    questionText: 'Who is the artist of "The Persistence of Memory"?',
    options: ['Salvador Dalí', 'René Magritte', 'Joan Miró', 'Piet Mondrian'],
    correctAnswer: 'Salvador Dalí',
  },
  {
    id: '8',
    questionText: 'Which famous artist cut off part of his ear?',
    options: ['Claude Monet', 'Paul Gauguin', 'Vincent van Gogh', 'Paul Klee'],
    correctAnswer: 'Vincent van Gogh',
  },
  {
    id: '9',
    questionText: 'What is the title of Edvard Munch’s most famous painting?',
    options: ['The Scream', 'The Kiss', 'The Dance of Life', 'The Madonna'],
    correctAnswer: 'The Scream',
  },
  {
    id: '10',
    questionText:
      'What is the technique of painting with dots of color called?',
    options: ['Cubism', 'Impressionism', 'Pointillism', 'Surrealism'],
    correctAnswer: 'Pointillism',
  },
];

export const codingData: Question[] = [
  {
    id: '1',
    questionText: "What does 'CSS' stand for?",
    options: [
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets',
    ],
    correctAnswer: 'Cascading Style Sheets',
  },
  {
    id: '2',
    questionText:
      'Which programming language is primarily used for web development?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
  },
  {
    id: '3',
    questionText: "What is the purpose of the 'useState' hook in React?",
    options: [
      'To handle API calls',
      'To manage component state',
      'To add event listeners',
      'To render JSX',
    ],
    correctAnswer: 'To manage component state',
  },
  {
    id: '4',
    questionText: 'Which of the following is a JavaScript framework?',
    options: ['Laravel', 'React', 'Django', 'Ruby on Rails'],
    correctAnswer: 'React',
  },
  {
    id: '5',
    questionText: 'In HTML, which tag is used to create a hyperlink?',
    options: ['<link>', '<a>', '<href>', '<url>'],
    correctAnswer: '<a>',
  },
  {
    id: '6',
    questionText:
      'Which of the following is not a valid variable declaration in JavaScript?',
    options: ['var', 'let', 'const', 'define'],
    correctAnswer: 'define',
  },
  {
    id: '7',
    questionText: "What does 'API' stand for?",
    options: [
      'Application Programming Interface',
      'Application Process Indicator',
      'Automated Program Interface',
      'Application Processor Interface',
    ],
    correctAnswer: 'Application Programming Interface',
  },
  {
    id: '8',
    questionText: 'Which symbol is used for comments in JavaScript?',
    options: ['#', '//', '/*', '--'],
    correctAnswer: '//',
  },
  {
    id: '9',
    questionText: 'Which of the following is used for version control?',
    options: ['Git', 'NPM', 'Docker', 'Webpack'],
    correctAnswer: 'Git',
  },
  {
    id: '10',
    questionText: 'Which method is used to merge two or more arrays in JavaScript?',
    options: ['concat()', 'merge()', 'join()', 'combine()'],
    correctAnswer: 'concat()',
  
  },
];

export const sportsData: Question[] = [
  {
    id: '1',
    questionText: 'Which country won the FIFA World Cup in 2018?',
    options: ['Brazil', 'Germany', 'France', 'Argentina'],
    correctAnswer: 'France',
  },
  {
    id: '2',
    questionText:
      'Who holds the record for the most home runs in a single MLB season?',
    options: ['Barry Bonds', 'Babe Ruth', 'Mark McGwire', 'Hank Aaron'],
    correctAnswer: 'Barry Bonds',
  },
  {
    id: '3',
    questionText:
      'In which year did Roger Federer win his first Wimbledon title?',
    options: ['2000', '2003', '2005', '2007'],
    correctAnswer: '2003',
  },
  {
    id: '4',
    questionText: 'Which team won the NBA championship in 2020?',
    options: [
      'Miami Heat',
      'Golden State Warriors',
      'Los Angeles Lakers',
      'Toronto Raptors',
    ],
    correctAnswer: 'Los Angeles Lakers',
  },
  {
    id: '5',
    questionText: 'Which athlete has won the most Olympic gold medals?',
    options: ['Usain Bolt', 'Michael Phelps', 'Carl Lewis', 'Mark Spitz'],
    correctAnswer: 'Michael Phelps',
  },
  {
    id: '6',
    questionText: 'Who is the all-time leading scorer in the NHL?',
    options: ['Wayne Gretzky', 'Mario Lemieux', 'Jaromir Jagr', 'Bobby Orr'],
    correctAnswer: 'Wayne Gretzky',
  },
  {
    id: '7',
    questionText: 'Which country has won the most Cricket World Cup titles?',
    options: ['India', 'West Indies', 'Australia', 'England'],
    correctAnswer: 'Australia',
  },
  {
    id: '8',
    questionText:
      "Who won the men's singles tennis gold medal at the 2008 Olympics?",
    options: ['Novak Djokovic', 'Rafael Nadal', 'Roger Federer', 'Andy Murray'],
    correctAnswer: 'Rafael Nadal',
  },
  {
    id: '9',
    questionText: 'Which NFL team has won the most Super Bowl titles?',
    options: [
      'Pittsburgh Steelers',
      'Dallas Cowboys',
      'New England Patriots',
      'San Francisco 49ers',
    ],
    correctAnswer: 'New England Patriots',
  },
  {
    id: '10',
    questionText: 'Who holds the record for the fastest 100m sprint time?',
    options: ['Usain Bolt', 'Yohan Blake', 'Justin Gatlin', 'Tyson Gay'],
    correctAnswer: 'Usain Bolt',
  },
];

export const quizData: AllQuizData = {
  mathematics: {
    title: 'Mathematics Quiz',
    questions: mathematicsData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your math skills with this quiz!',
  },
  science: {
    title: 'Science Quiz',
    questions: scienceData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your science knowledge with this quiz!',
  },
  english: {
    title: 'English Quiz',
    questions: englishData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your English language skills with this quiz!',
  },
  technology: {
    title: 'Technology Quiz',
    questions: technologyData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your technology knowledge with this quiz!',
  },
  medical: {
    title: 'Medical Quiz',
    questions: medicalData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your medical knowledge with this quiz!',
  },
  programming: {
    title: 'Programming Quiz',
    questions: programmingData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your programming knowledge with this quiz!',
  },
  art: {
    title: 'Art Quiz',
    questions: artData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your art knowledge with this quiz!',
  },
  coding: {
    title: 'Coding Quiz',
    questions: codingData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your coding skills with this quiz!',
  },
  sports: {
    title: 'Sports Quiz',
    questions: sportsData,
    rightAnswerPoints: 1,
    wrongAnswerPoints: 1,
    totalTime: '1 m 20s ',
    description: 'Test your sports knowledge with this quiz!',
  },
};

export const erectionData: CheckboxItem[] = [
  {
    id: '1',
    questionText: 'Q.1 Which programming language is primarily used to build React applications?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
    status: 'unchecked',
  },
  {
    id: '2',
    questionText: 'Q.2 What is the main purpose of React?',
    options: [
      'Data Analysis',
      'Web Development',
      'Mobile App Development',
      'Game Development',
    ],
    correctAnswer: 'Web Development',
    status: 'unchecked',
  },
  {
    id: '3',
    questionText: 'Q.3 What is JSX in React?',
    options: [
      'JavaScript and XML',
      'JavaScript Extension',
      'Java Syntax Extension',
      'Java Express Syntax',
    ],
    correctAnswer: 'JavaScript and XML',
    status: 'unchecked',
  },
  {
    id: '4',
    questionText: 'Q.4 Which command is used to create a new React app?',
    options: [
      'npm init react-app',
      'npx create-react-app',
      'react-create-app',
      'npx start-react',
    ],
    correctAnswer: 'npx create-react-app',
    status: 'unchecked',
  },
  {
    id: '5',
    questionText: 'Q.5 What is the use of `useState` in React?',
    options: [
      'To manage state in functional components',
      'To manage props',
      'To handle API requests',
      'To create components',
    ],
    correctAnswer: 'To manage state in functional components',
    status: 'unchecked',
  },
  {
    id: '6',
    questionText: 'Q.6 How do you pass data from a parent component to a child component in React?',
    options: ['State', 'Props', 'Context', 'Hooks'],
    correctAnswer: 'Props',
    status: 'unchecked',
  },
  {
    id: '7',
    questionText: 'Q.7 What does the `useEffect` hook do in React?',
    options: [
      'It handles HTTP requests',
      'It manages state',
      'It performs side effects in functional components',
      'It renders components',
    ],
    correctAnswer: 'It performs side effects in functional components',
    status: 'unchecked',
  },
  {
    id: '8',
    questionText: 'Q.8 Which lifecycle method is replaced by `useEffect` in functional components?',
    options: [
      'componentDidMount',
      'componentDidUpdate',
      'componentWillUnmount',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
    status: 'unchecked',
  },
  {
    id: '9',
    questionText: 'Q.9 What is a common library used for routing in React applications?',
    options: [
      'React Router',
      'Redux',
      'Axios',
      'Express',
    ],
    correctAnswer: 'React Router',
    status: 'unchecked',
  },
  {
    id: '10',
    questionText: 'Q.10 What is a key feature of React?',
    options: [
      'One-way data binding',
      'Two-way data binding',
      'No data binding',
      'None of the above',
    ],
    correctAnswer: 'One-way data binding',
    status: 'unchecked',
  },
];

