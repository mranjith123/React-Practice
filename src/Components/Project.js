import React from 'react';
import './Project.css';

const projectData = [
  {
    name: 'Simplifii Dashboard',
    duration: 'Sep 2023 to Till Now',
    details:
      'Simplifii is a versatile Business Apps platform enabling companies to scale & innovate faster.',
    skills: 'React.js, Redux, HTML, Node.js, Typescript, Figma, UI, CI/CD',
    responsibilities: [
      'Creating wireframes and prototypes using Figma.',
      'Analysing, debugging, and assisting in problem-solving in both development and production environments.',
      'Regularly updating and enhancing the usability of the dashboard across devices of different screen sizes.',
      'Providing graphics/images and icons using Photoshop and Figma.',
      'Participating in page speed optimization for mobile and desktop views.',
    ],
  },
  {
    name: 'HDFC Forex, Management',
    duration: 'Feb 2023 to Aug 2023',
    details:
      'Foreign exchange refers to exchanging the currency of one country for another at prevailing exchange rates. Foreign exchange converts the currency of one country into another.',
    skills: 'React.js, Redux, HTML, CSS, Sass, JavaScript, Axios',
    responsibilities: [
      'Debugging production bugs in React.',
      'Designing class and functional-based components.',
      'Manage component and global state using tools like React Hooks, Redux, or Context API.',
      "Utilize React's lifecycle methods or hooks to manage component states and side effects effectively.",
      'State manipulation using Redux-Saga.',
      'Integrating 3rd party plugins using npm in React.',
      'API integration and unit testing.',
    ],
  },
  {
    name: 'CAD',
    duration: 'Dec 2019 to Jan 2023',
    details:
      'The heart doctor (cardiologist) guides a thin, flexible tube (catheter) to the narrowed part of the heart artery. A tiny balloon is inflated to help widen the blocked artery and improve blood flow.',
    skills: 'HTML, CSS, Sass, JavaScript, React.js, Redux, CI/CD',
    responsibilities: [
      'Collaborating with product managers and designers. Analysing, debugging, and assisting in problem-solving in both development and production environments.',
      'Leading a UI team (10+ members) productively. Providing guidance, feedback, and training.',
      'Regularly updating and enhancing the usability of the website with the latest design principles.',
      'Participating in page speed optimization for mobile and desktop views.',
      'Managing resources based on their skill sets and proactively using JIRA for task tracking.',
      'Participating in the hiring process for UI developers.',
    ],
  },
];

function Project() {
  return (
    <div className="Project">
      <h2>Project</h2>
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
          <p>
            <strong>Details:</strong> {project.details}
          </p>
          <p>
            <strong>Skills:</strong> {project.skills}
          </p>
          <ul>
            <strong>Responsibilities:</strong>
            {project.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Project;
