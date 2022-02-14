import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const MaxPrice = ({ price, handleMaxPrice }) => {
  const values = [120000, 250000, 350000, 450000, 600000, 700000, 800000];
  return (
    <>
      <Dropdown>
        <DropdownButton
          id="dropdown-basic-button"
          title={!price ? 'Min Price' : `$${price}`}
        >
          {values.map((item) => {
            return (
              <Dropdown.Item as="button" onClick={handleMaxPrice} value={item}>
                {`$${item}`}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </Dropdown>
    </>
  );
};

export default MaxPrice;
