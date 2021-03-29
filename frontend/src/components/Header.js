import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        // fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            1<span style={{ color: "rgba(133, 20, 76, 0.9)" }}>ROOM</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
