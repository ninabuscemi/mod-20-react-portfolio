import React from 'react';
import Project from './Work';
import projectImage from '../../../assets/images/03-javascript-homework-demo.png'; // Import the image
import projectImage2 from '../../../assets/images/04-proj-1.png'; // Import the image


const projects = [
  {
    id: 0,
    title: "Password Generator",
    tools: "HTML, CSS, Javascript",
    image: projectImage,
    description: "A web application that generates random passwords.",
    repo: "https://github.com/ninabuscemi/module-3",
    live: "https://ninabuscemi.github.io/module-3/",
  },

  {
    id: 1,
    title: "Emoji Translator (Team Project)",
    tools: "HTML, CSS (Tailwind CSS), Javascript",
    image: projectImage2,
    description: "A fun web application that allows users to translate their text into expressive emojis, and it also offers a feature to generate random quotes with a visually appealing design.",
    repo: "https://github.com/ninabuscemi/Emoji-Translator",
    live: "https://johnchewning.github.io/Emoji-Translator/",
  },

// adding projects later
];

const Portfolio = () => {
  return (
   <div className='m-4'>
            <Project projects={projects} />
        </div>
  );
}

export default Portfolio;