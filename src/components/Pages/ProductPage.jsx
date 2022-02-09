import MapSection from '../Map/BingMap';
import PropertyListings from '../PropertiesDisplay/PropertyListings';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ProductPage = (props) => {
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
      <MapSection PropertiesData={props.PropertiesData}></MapSection>
      <PropertyListings
        City={props.City}
        setSortBy={props.setSortBy}
        PropertiesData={props.PropertiesData}
      ></PropertyListings>
      {/* {console.log('Properties', properties)} */}
    </main>
  );
};
export default ProductPage;
