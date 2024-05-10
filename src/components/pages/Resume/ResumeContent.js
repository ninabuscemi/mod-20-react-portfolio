import React from 'react';
import resumeFile from '../../../assets/images/files/ninaresume.pdf';

const Resume = () => {
  return (
    <div>
      <h2>My Resume</h2>

      <button onClick={() => window.open(resumeFile, '_blank')} 
      className="btn btn-primary"> Download Resume </button>
      <p>
      </p>
      <h3>Proficiencies</h3>
      <ul>
    Front end:
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>jQuery</li>
</ul>
<ul> Back end:
        <li> Python</li>
        <li> MYSQL</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>React</li>
        <li>Node</li>
</ul>  

<p>
      </p>
    </div>
  );
}

export default Resume;