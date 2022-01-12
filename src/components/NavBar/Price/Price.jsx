import React from 'react';
import MinPrice from './MinPrice';
import MaxPrice from './MaxPrice';

const Price = ({
  PriceMin,
  selectMinPrice,
  PriceMax,
  selectMaxPrice,
}) => {
  return (
    <div className="flex-container">
      <MinPrice
        PriceMin={PriceMin}
        selectMinPrice={selectMinPrice}
      ></MinPrice>
      <MaxPrice
        PriceMax={PriceMax}
        selectMaxPrice={selectMaxPrice}
      ></MaxPrice>
    </div>
  );
};

export default Price;
