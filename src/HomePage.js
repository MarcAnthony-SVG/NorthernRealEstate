import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './HomePage.css';
import PropertyListings from './components/PropertiesDisplay/PropertyListings';
import properties from './data/properties';
import MapSection from './components/Map/BingMap';
import Footer from "./components/Footer/Footer"
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      PropertiesData: [...properties], // When complete replace with [] and unhide componentDidMount
      City: '',
      color: '',
      address: '',
      Required: {
        CurrentPage: '1', //REQUIRED
        LatitudeMin: 52.1304, // REQUIRED
        LatitudeMax: 51.21389, // REQUIRED
        LongitudeMax: -10.267941690981388, // REQUIRED
        LongitudeMin: -102.462776,
        RecordsPerPage: '10', // REQUIRED Number items returned per request, max 50
      },
      NavBarOptions: {
        SearchedCity: '',
        PriceMin: 0 || 'Min Price', // Filter by min price, applied when TransactionTypeId = 2
        PriceMax: 0 || 'Max Price', //Filter by max price, applied when TransactionTypeId = 2
        BedRange: '0-0:Any', //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
        BathRange: '0-0:Any', //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
        BuildingTypeId: 0, //0-No Preference|1-House|2-Duplex|3-Triplex|5-Residential Commercial Mix|6-Mobile Home|12-Special Purpose|14-Other|16-Row / Townhouse|17-Apartment|19-Fourplex|20-Garden Home|26-Modular|27-Manufactured Home/Mobile|28-Commercial Apartment|29-Manufactured Home
        // OpenHouse: Boolean,
        RentMin: 0, // Filter by min price, applied when TransactionTypeId = 3
        RentMax: 0, // Filter by max price, applied when TransactionTypeId = 3
        NumberOfDays: 0, //Listed since
        CultureId: 1 || 2, // 1 - English|2 - French
        ZoningTypeGroupId: undefined, // 1-Agricultural|2-Commercial Mixed|3-Commercial Office|4-Commercial Retail|5-Industrial|6-Industrial-Heavy|7-Industrial-Light|8-Industrial-Medium|9-Institutional|10-Other|11-Recreational|12-Residential-High Density|13-Residential-Low Density|14-Residential - Medium Density
        ParkingTypeId: undefined, // 1-Attached garage|2-Integrated garage|3-Detached garage|4-Garage|5-Carport|6-Underground|7-Indoor|8-Open|9-Covered|10-Parking pad|11-Paved Yard|35-Boat House|36-Concrete|37-Heated Garage
      },
      ListingOptions: {
        SortBy: 1, // 1-Price($)|6-Date|11-Virtual Tour|12-Open Houses|13-More Photos
        SortOrder: 'A', //A - ascending | D - descending
      },
    };
  }

  render() {
    return (
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        <main className="main-page-container">
          <MapSection PropertiesData={this.state.PropertiesData}></MapSection>
          <PropertyListings
            City={this.state.City}
            setSortBy={this.setSortBy}
            PropertiesData={this.state.PropertiesData}
          ></PropertyListings>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
