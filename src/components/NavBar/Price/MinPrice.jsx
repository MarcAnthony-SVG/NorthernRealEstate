import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const MinPrice = ({ handleMinPrice, price }) => {
  const values = [60000, 120000, 180000, 250000, 300000, 400000, 450000]
  return (
    <>
        <Dropdown>
          <DropdownButton
            id="dropdown-basic-button"
            title={!price ? 'Min Price' : `$${price}`}
          >
              {values.map((item) => {
                  return (
                    <Dropdown.Item
                      as="button"
                      onClick={handleMinPrice}
                      value={item}
                    >
                      {`$${item}`}
                    </Dropdown.Item>
                  );
                })}
          </DropdownButton>
        </Dropdown>
    </>
  );
};

export default MinPrice;
