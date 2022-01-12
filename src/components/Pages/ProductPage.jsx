import MapSection from '../Map/BingMap';
import PropertyListings from '../PropertiesDisplay/PropertyListings';
const ProductPage = (props) => {
  return (
    <main className="main-page-container" >
      <MapSection PropertiesData={props.PropertiesData}></MapSection>
      <PropertyListings
        City={props.City}
        setSortBy={props.setSortBy}
        PropertiesData={props.PropertiesData}
      ></PropertyListings>
    </main>
  );
};
export default ProductPage;
