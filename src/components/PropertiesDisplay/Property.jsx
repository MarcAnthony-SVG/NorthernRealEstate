import React from 'react';
import './index.css';

const Property = ({ PropertiesData }) => {
  return (
    <article className="Properties-Container">
      {PropertiesData.map(({ price, sqft, address }, index) => (
        <ul key={index} className="Property">
          <img
            alt={`Property`}
            className="PropertyImage"
            src={`https://www.pinclipart.com/picdir/big/0-8554_house-png-clip-art-best-web-clipart-inside.png`}
          />
          <li id="Price">Price: ${price}</li>
          <li id="SizeTotal">Size: {sqft} Sqft</li>
          <li id="Address">Address: {address}</li>
        </ul>
      ))}
    </article>
  );
};

export default Property;
