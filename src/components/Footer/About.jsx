import React from 'react';
const About = () => {
  return (
    <article className="about-article">
      <h5>About</h5>
      <ul className="about-links">
        <li>
          <a href="/Our Story">Our Story</a>
        </li>
        <li>
          <a href="/Benefits">Benefits</a>
        </li>
        <li>
          <a href="/Team">
            Team
            {console.log(process.env.REACT_APP_BING_API_KEY)}
          </a>
        </li>
        <li>
          <a href="/Careers">Careers</a>
        </li>
      </ul>
    </article>
  );
};

export default About;
