import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const MaxPrice = ({ PriceMax, selectMaxPrice }) => {
  return (
    <div className="MaxPrice">
      <Dropdown>
        <DropdownButton id="dropdown-basic-button" title={PriceMax}>
          $ No Max
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="120,000">
            $120K
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="250,000">
            $250K
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="350,000">
            $350K
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="450,000">
            $450K
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="600,000">
            $600K
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="700,000">
            $700K
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="800,000">
            $800K
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={selectMaxPrice} value="Any Price">
            Any Price
          </Dropdown.Item>
        </DropdownButton>
      </Dropdown>
    </div>
  );
};

export default MaxPrice;
