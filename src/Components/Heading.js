import React from 'react';
import './Heading.css';
import student from '../Assets/student.jpg';
import student1 from '../Assets/student1.jpg';
import student2 from '../Assets/student2.jpg';


const Heading = () => {
  return (
    <header className="header">
      <img src={student} alt="Logo" className="student" />
      <img src={student1} alt="Logo" className="student1" />
      <img src={student2} alt="Logo" className="student2" />
      
    </header>
  );
};

export default Heading;
