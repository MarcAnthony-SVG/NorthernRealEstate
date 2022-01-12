import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <article className="about-article">
      <h5>About</h5>
      <ul className="about-links">
        <li>
          <Link to="/ourstory">Our Story</Link>
        </li>
        <li>
          <Link to="/benefits">Benefits</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
      </ul>
    </article>
  );
};

export default About;
