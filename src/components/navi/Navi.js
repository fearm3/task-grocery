import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const Navi = () => {
  return (
    <div>
      <Navbar color="secondary" expand="md" dark>
        <NavbarBrand>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Northwind Marketplace
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav navbar>
            <NavItem className="bg-primary">
              <NavLink>
                <Link
                  to="/saveproduct"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Add Product
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
