import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Donation.css";
const Donation = () => {
  return (
    <div className="donation">
      <Container>
        <Row>
          <Col md={12}>
            <h1>
              Make an impact for a charity or cause you care about. Give today!
            </h1>
          </Col>
          <Col md={6}>
            <div className="quote-desc text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="btn btn-md btn-primary">Donate $50</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="quote-desc text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="btn btn-md btn-primary">Donate $500</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Donation;
