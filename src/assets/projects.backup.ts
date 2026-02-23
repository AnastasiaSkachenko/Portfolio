import { Project } from "../app/components/Projects";
import chainOut from "../assets/chainOut.png";
import nutriTrack from "../assets/nutriTrack.png";
import chasRoom from "../assets/ChasRooms.png"

export const projects: Project[] = [
  {
    title: 'ChainOut',
    description: 'Mobile app for lovers of disc-golf. Convert sport into full-blown game with badges and scoreboard. This project is still ongoing so it is impossible to view code or demo yet.',
    image: chainOut,
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ChainOut/ChainOut',
    demo: 'https://github.com/ChainOut/ChainOut'
  },
  {
    title: 'NutriTrack',
    description: 'Web + mobile application for keeping track of your macros and activities actively helping you meet your goal. Demo is not available.',
    image: nutriTrack,
    technologies: ['Django', 'TypeScript','Tailwind', "React"],
    github: 'https://github.com/AnastasiaSkachenko/NutriTrack',
    demo: 'https://github.com/AnastasiaSkachenko/NutriTrack'
  },
  {
    title: 'ChasRooms',
    description: 'A project developed in a week for a hakathon allowing users to book rooms for study. Developed for students in Chas Academy. Demo is not available yet.',
    image: chasRoom,
    technologies: ['.NET', 'TypeScript', 'PostgreSQL', 'React'],
    github: 'https://github.com/janne022/ChasRooms',
    demo: 'https://github.com/janne022/ChasRooms'
  }
];
