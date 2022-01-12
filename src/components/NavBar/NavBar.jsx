import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
// import ForSale from '../subComponents/forSale';
// import Price from './NavBarPrice.jsx';
// import BedsAndBath from '../subComponents/bed&Bath';
// import HomeType from '../subComponents/homeType';
// import More from '../subComponents/more';

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Form onSubmit={props.onFormSubmit} inline>
        <FormControl
          onChange={props.onSearch}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button
          variant="outline-success"
          type="submit"
          value="Submit"
        >
          Search
        </Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <NavDropdown title="For Sale" id="basic-nav-dropdown">
            <ForSale></ForSale>
          </NavDropdown> */}
          <NavDropdown title="Price" id="basic-nav-dropdown">
            {/* <Price
              PriceMin={props.NavBarOptions.PriceMin}
              PriceMax={props.NavBarOptions.PriceMax}
              selectMinPrice={props.selectMinPrice}
              selectMaxPrice={props.selectMaxPrice}
            ></Price> */}
          </NavDropdown>
          {/* <NavDropdown title="Beds & Bath" id="basic-nav-dropdown">
            <BedsAndBath
              selectMinBath={props.selectMinBath}
              selectMaxBath={props.selectMaxBath}
            ></BedsAndBath>
          </NavDropdown> */}
          <NavDropdown title="Home Type" id="basic-nav-dropdown">
            {/* <HomeType
              selectBuildingTypeId={props.selectBuildingTypeId}
            ></HomeType> */}
          </NavDropdown>
          {/* <NavDropdown title="More" id="basic-nav-dropdown">
            <More setOpenHouse={props.setOpenHouse}></More>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  getPropertiesByCity: PropTypes.func,
  inputCityName: PropTypes.func,
  SearchedCity: PropTypes.string,
};

export default NavBar;
