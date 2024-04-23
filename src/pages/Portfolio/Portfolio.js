import React from 'react';
import Project from './Work';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1.',
    image: '/path/to/project1/image.jpg',
    deployedLink: 'https://example.com/project1',
    githubLink: 'https://github.com/your_username/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: '/path/to/project2/image.jpg',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/your_username/project2',
  },
  // adding projects later
];

const Portfolio = () => {
  return (
    <div>
      <h2>My Projects</h2>
    </div>
  );
}

export default Portfolio;