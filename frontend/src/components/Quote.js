import React from "react";
import "./Quote.css";
import { Row, Col, Container } from "react-bootstrap";
import quoteImage from "../testimonial-hero-5.png";
const Quote = () => {
  return (
    <div
      className="quote"
      style={{ backgroundImage: "url(" + quoteImage + ")" }}
    >
      <Container>
        <Row>
          <Col md={12}>
            <h3 className="quote-text mb-4">
              I FOUND THERE WAS ONLY ONE WAY TO LOOK THIN, HANG OUT WITH FAT
              PEOPLE.
            </h3>
            <div className="quote-author text-center">
              <span>
                — Natalie Plociennik, Fine Arts Studio, Graduate, 2019
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quote;
