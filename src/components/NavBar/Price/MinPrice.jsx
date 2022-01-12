import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const MinPrice = ({ PriceMin, selectMinPrice }) => {
  return (
    <div>
      <div className="MinPrice">
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title={PriceMin}>
            <Dropdown.Item
              as="button"
              onClick={() => {
                console.log('Price', PriceMin);
              }}
              value="Any Price"
            >
              Any Price
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={selectMinPrice} value="60,000">
              $60K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={selectMinPrice} value="120,000">
              $120K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={selectMinPrice} value="180,000">
              $180K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={selectMinPrice} value="250,000">
              $250K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={selectMinPrice} value="300,000">
              $300K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={selectMinPrice} value="400,000">
              $400K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={selectMinPrice} value="450,000">
              $450K
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
    </div>
  );
};

export default MinPrice;
