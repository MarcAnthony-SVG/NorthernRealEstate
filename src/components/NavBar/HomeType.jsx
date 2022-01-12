import React from 'react';
import MinPriceButton from './MinPriceButton';
import MaxPriceButton from './MaxPriceButton';

const NavbarPrice = ({
  PriceMin,
  selectMinPrice,
  PriceMax,
  selectMaxPrice,
}) => {
  return (
    <div className="flex-container">
      <MinPriceButton
        PriceMin={PriceMin}
        selectMinPrice={selectMinPrice}
      ></MinPriceButton>
      <MaxPriceButton
        PriceMax={PriceMax}
        selectMaxPrice={selectMaxPrice}
      ></MaxPriceButton>
    </div>
  );
};
