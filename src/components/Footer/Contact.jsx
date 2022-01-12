import React from 'react';
const Contact = () => {
  return (
    <article className="contact-article">
      <form className="email-subscription">
        <label for="emailaddress">Sign up for updates!</label>
        <div className="email-container">
          <input
            type="text"
            id="emailaddress"
            name="emailaddress"
            placeholder="Email Address"
          ></input>
          <button>
            <i class="fas fa-mail-bulk"></i>
          </button>
        </div>
      </form>
      <ul className="contact-info">
        <li>
          <i class="fas fa-phone-alt"></i> Phone number: 444-444-4444
        </li>
        <li>
          <i class="far fa-paper-plane"></i> Email address:
          info@northernrealestate.com
        </li>
        <li>
          <i class="far fa-map"></i> Address: 44444 Northern Ranch Austin Texas
          44444
        </li>
      </ul>
    </article>
  );
};
export default Contact;