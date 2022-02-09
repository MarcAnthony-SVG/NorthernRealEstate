import { React, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const MinPrice = (props) => {
  const [price, setPrice] = useState('');
  const selectedPrice = (event) => {
    setPrice(event.target.value);
  };
  const transferValue = (event) => {
    selectedPrice(event)
    props.func(price);
    event.preventDefault();
  };
  return (
    <div>
      <div className="MinPrice">
        <Dropdown>
          <DropdownButton
            id="dropdown-basic-button"
            title={!price ? 'PriceMin' : price}
          >
            <Dropdown.Item
              as="button"
              onClick={transferValue}
              value="Any Price"
            >
              Any Price
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={transferValue} value="60,000">
              $60K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={transferValue} value="120,000">
              $120K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={transferValue} value="180,000">
              $180K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={transferValue} value="250,000">
              $250K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={transferValue} value="300,000">
              $300K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={transferValue} value="400,000">
              $400K
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={transferValue} value="450,000">
              $450K
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
    </div>
  );
};

export default MinPrice;
