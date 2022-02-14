import  React from 'react';
import MinPrice from './MinPrice';
import MaxPrice from './MaxPrice';
const Price = ({ handleMaxPrice, handleMinPrice, price }) => {
  return (
    <div className="flex-container">
      <MinPrice
        handleMinPrice={handleMinPrice}
        price={price.minimum}
      ></MinPrice>
      <MaxPrice
        handleMaxPrice={handleMaxPrice}
        price={price.maximum}
      ></MaxPrice>
    </div>
  );
};

export default Price;
