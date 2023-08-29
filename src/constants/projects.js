import Task from '../images/Task.jpg';
import SlimMom from '../images/SlimMom.jpg';
import Film from '../images/Film.jpg';
import Wallet from '../images/Wallet.jpg';

export const projects = [
  {
    id: 0,
    title: 'Wallet',
    description:
      'This application was created for people who want to comfortably manage their finances, keep track of their income and expenses, and plan their budget wisely. At the same time, the user can get acquainted with the current exchange rate, financial news, as well as the weather forecast. Wallet is a React application built with React Redux, Redux toolkit, React Hook Form, Yup for validation, react-i18next, and styled-components.',
    image: Wallet,
    code: 'https://github.com/HannaMois/Wallet-React-project',
    website: 'https://hannamois.github.io/Wallet-React-project/',
  },

  {
    id: 1,
    title: 'SlimMom',
    description:
      'This project was created for people who adhere to theconcept of proper nutrition. After filling out the form on the site, the user will be able to find out the list of products prohibited for him to consume, calculate the required number of calories per day to obtain the maximum desired result, keep statistics, and see his progress in dynamics on a diagram.Slim Mom is a web app built using React, Redux, React Hook Form, Yup for validation, and styled-components.',
    image: SlimMom,

    code: 'https://github.com/HannaMois/SlimMom',
    website: 'https://hannamois.github.io/SlimMom/',
  },
  {
    id: 2,
    title: 'Daily task manager',
    description:
      'Task Manager is a web application built with React, Emotion/Styled, and Redux Toolkit, among other technologies. It features user authentication and registration, with support for user profile pictures. The app allows users to manage their tasks, including the ability to view task history and active tasks. A chart is included to visualize the percentage of completed tasks compared to active ones. The app is also localized with i18next and is integrated with Firebase to store task data. Additionally, the app is responsive and can be used on different devices.',
    image: Task,

    code: 'https://github.com/HannaMois/daily-task-manager',
    website: 'https://hannamois.github.io/daily-task-manager/',
  },

  {
    id: 3,
    title: 'Film library',
    description:
      'It is a website with a collection of movies where you can search for popular movies, filter by ratings and genres, or search for movies by title. You can also add movies to your favorites or mark them as watched, which will be saved in local storage.',
    image: Film,

    code: 'https://github.com/HannaMois/films-project',
    website: ' https://hannamois.github.io/films-project/',
  },
];
