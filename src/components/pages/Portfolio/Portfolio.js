import React from 'react';
import Project from './Work';

const projects = [
{
id: 0,
title: "Password Generator",
tools: "HTML, CSS, Javascript",
image: "../assets//images/03-javascript-homework-demo.png",
description: "A web application that generates random passwords.",
repo: "https://github.com/ninabuscemi/module-3",
live: "https://ninabuscemi.github.io/module-3/",
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