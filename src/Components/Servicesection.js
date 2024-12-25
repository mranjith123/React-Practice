import React from 'react';
import './Servicesection.css';

const Servicesection = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Service 1</h3>
        <p>Description of Service 1</p>
      </div>
      <div className="service-item">
        <h3>Service 2</h3>
        <p>Description of Service 2</p>
      </div>
      <div className="service-item">
        <h3>Service 3</h3>
        <p>Description of Service 3</p>
      </div>
    </section>
  );
};

export default Servicesection;
