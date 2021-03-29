import React from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <Jumbotron className="mb-0">
        <Row>
          <Col md={6}>
            <div className="banner-details">
              <h1>Welcome to our school</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary" className="btn-lg mr-2">
                  Learn more
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </section>
  );
};

export default Banner;
