import { React, useState } from 'react';
import MinPrice from './MinPrice';
import MaxPrice from './MaxPrice';

const Price = ({
  selectItem,
  PriceMin,
  selectMinPrice,
  PriceMax,
  selectMaxPrice,
}) => {
  const [data, setData] = useState('');
  const example = (data) => {
    setData(data);
  };

  return (
    <div className="flex-container">
      <p>{data}</p>
      <MinPrice
        PriceMin={PriceMin}
        selectMinPrice={selectMinPrice}
        selectItem={selectItem}
        func={example}
      ></MinPrice>
      <MaxPrice
        PriceMax={PriceMax}
        selectMaxPrice={selectMaxPrice}
        selectItem={selectItem}
      ></MaxPrice>
    </div>
  );
};

export default Price;
