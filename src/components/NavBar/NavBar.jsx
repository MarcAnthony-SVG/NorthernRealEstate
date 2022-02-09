import { React, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ForSale from './ForSale';
import Price from './Price/Price.jsx';
// import BedsAndBath from '../subComponents/bed&Bath';
// import HomeType from '../subComponents/homeType';
import More from './More';
import './index.css';

const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <span id="span-icon">
          <i className="fas fa-home" size="9x"></i>
        </span>
      </Link>
      <Form onSubmit={props.handleSubmit}>
        <Row>
          <Col className="my-1">
            <FormControl
              onChange={props.selectItem}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button variant="outline-success" type="submit" value="Submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="For Sale" id="basic-nav-dropdown">
            {/* <ForSale></ForSale> */}
          </NavDropdown>
          <NavDropdown title="Price" id="basic-nav-dropdown">
            <Price
              selectItem={props.selectItem}
              PriceMin={props.NavBarOptions.PriceMin}
              PriceMax={props.NavBarOptions.PriceMax}
              selectMinPrice={props.selectMinPrice}
              selectMaxPrice={props.selectMaxPrice}
            ></Price>
          </NavDropdown>
          {/* <NavDropdown title="Beds & Bath" id="basic-nav-dropdown"> */}
          {/* <BedsAndBath
              selectMinBath={props.selectMinBath}
              selectMaxBath={props.selectMaxBath}
            ></BedsAndBath> */}
          {/* </NavDropdown> */}
          {/* <NavDropdown title="Home Type" id="basic-nav-dropdown"> */}
          {/* <HomeType
              selectBuildingTypeId={props.selectBuildingTypeId}
            ></HomeType> */}
          {/* </NavDropdown> */}
          {/* <NavDropdown title="More" id="basic-nav-dropdown"> */}
          {/* <More setOpenHouse={props.setOpenHouse}></More> */}
          {/* </NavDropdown> */}
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
