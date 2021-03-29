import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <Container fluid className="px-md-0">
        <Row>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/400x300.png"
              className="w-100"
              alt="placeholder"
            />
          </Col>
          <Col md={6}>
            <div className="about-details">
              <h1>Who We Are</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button variant="primary" className="btn-lg mt-3">
                Learn more
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
