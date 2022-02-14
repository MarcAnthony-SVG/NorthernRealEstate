import MapSection from '../Map/BingMap';
import PropertyListings from '../PropertiesDisplay/PropertyListings';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ProductPage = ({ PropertiesData, City }) => {
  const [property, setProperty] = useState([...PropertiesData]);

  const decendingValue = (arr) => {
    const originalData = [...PropertiesData];
    const sorted = originalData.sort((a, b) => {
      return a.price - b.price;
    });
    setProperty(sorted);
  };
  const sortByDate = (arr) => {
    const originalData = [...PropertiesData];
    const sorted = originalData.sort((a, b) => {
      return a.data_added - b.data_added;
    });
    setProperty(sorted);
  };
  const sortByVirtualTour = (arr) => {
    const originalData = [...PropertiesData];
    const filtered = originalData.filter((property) => {
      if (property.virtual_tour === true) {
        return property;
      }
    });
    setProperty(filtered);
  };
  const sortByOpenHouses = (arr) => {
    const originalData = [...PropertiesData];
    const filtered = originalData.filter((property) => {
      if (property.open_house === true) {
        return property;
      }
    });
    setProperty(filtered);
  };
  /*
  const [properties, setProperties] = useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const results = res.data;
      setProperties(results);
    });
  }, []);
  */
  return (
    <main className="main-page-container">
      <MapSection PropertiesData={property}></MapSection>
      <PropertyListings
        City={City}
        // setSortBy={props.setSortBy}
        PropertiesData={PropertiesData}
        sortedData={property}
        decendingValue={decendingValue}
        sortByDate={sortByDate}
        sortByVirtualTour={sortByVirtualTour}
        sortByOpenHouses={sortByOpenHouses}
      ></PropertyListings>
    </main>
  );
};
export default ProductPage;
