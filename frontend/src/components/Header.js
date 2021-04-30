import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";
import "./Header.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

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
              {/* <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/" activeClassName="">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <>
                  <LinkContainer to="/courses">
                    <Nav.Link>Courses</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      {/* <i className="fas fa-user"></i>  */}
                      Sign in
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>
                      {/* <i className="fas fa-user"></i>  */}
                      Sign up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
              {userInfo && ["admin", "teacher"].includes(userInfo.role) && (
                <NavDropdown
                  title={`${userInfo.role === "admin" ? "ADMIN" : "TEACHER"}`}
                  id="adminmenu"
                >
                  {userInfo && ["admin"].includes(userInfo.role) && (
                    <LinkContainer to="/admin/users">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  <LinkContainer to="/admin/students">
                    <NavDropdown.Item>Students</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
