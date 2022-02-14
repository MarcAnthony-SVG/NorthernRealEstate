import React, { useState } from 'react';
import Property from './Property.jsx';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './index.css';

const PropertyListings = ({
  City,
  PropertiesData,
  sortedData,
  decendingValue,
  sortByDate,
  sortByVirtualTour,
  sortByOpenHouses,
}) => {
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
          <h2>{sortedData.length} results</h2>
        )}
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title="Sort By">
            <Dropdown.Item
              as="button"
              onClick={() => {decendingValue(PropertiesData)}}
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
      <Property PropertiesData={sortedData}></Property>
    </section>
  );
};

export default PropertyListings;
