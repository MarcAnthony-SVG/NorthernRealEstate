import React, { useState } from 'react';
import Property from './Property.jsx';
import { Dropdown, DropdownButton } from 'react-bootstrap';

// import '/css/PropertyListings.css';

const PropertyListings = ({ City, PropertiesData, setSortBy }) => {
  const [property, setProperty] = useState([...PropertiesData]);

  const decendingValue = (arr) => {
    const sorted = arr.sort((a, b) => {
      return a.price - b.price;
    });
    setProperty(sorted);
  };
  const sortByDate = (arr) => {
    const sorted = arr.sort((a, b) => {
      return a.price - b.price;
    });
    setProperty(sorted);
  };
  const sortByVirtualTour = (arr) => {
    const filtered = arr.filter((property) => {
      if (property.virtual_tour === true) {
        return property;
      }
    });
    setProperty(filtered);
  };
  const sortByOpenHouses = (arr) => {
    const filtered = arr.filter((property) => {
      if (property.open_house === true) {
        return property;
      }
    });
    setProperty(filtered);
  };
  const titleSection = <h2>Welcome to Northern Real Estate</h2>;
  const titleAfterSearch = <h2>Searching for homes in the {City} area.</h2>;
  return (
    <section className="property-listing-section">
      <header
        style={{
          display: 'fixed',
        }}
      >
        {!City ? titleSection : titleAfterSearch}
        {!PropertiesData.length ? (
          <h2> 0 results</h2>
        ) : (
          <h2>{property.length} results</h2>
        )}
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title="Sort By">
            <Dropdown.Item
              as="button"
              onClick={() => decendingValue(PropertiesData)}
              value="1"
            >
              Price
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => {
                sortByDate(PropertiesData);
              }}
              value="6"
            >
              Date
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => {
                sortByVirtualTour(PropertiesData);
              }}
              value="11"
            >
              Virtual Tour
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => {
                sortByOpenHouses(PropertiesData);
              }}
              value="12"
            >
              Open Houses
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </header>
      <Property PropertiesData={property}></Property>
    </section>
  );
};

export default PropertyListings;
