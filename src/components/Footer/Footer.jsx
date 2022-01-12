import React from 'react';
import About from "./About"
import LegalArticle from './LegalSection';
import Contact from './Contact';
import "./index.css"
const Footer = () => {
  return (
    <section className='footer-section'>
      <About></About>
      <LegalArticle></LegalArticle>
      <Contact></Contact>
    </section>
  );
};
export default Footer;
