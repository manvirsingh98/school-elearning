import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./ContactPage.css";

const Contact = () => {
  return (
    <div className="contact">
      <Jumbotron fluid>
        <Container>
          <h4 className="text-center mb-0">CONTACT US</h4>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={12}>
            <div className="contact-form"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
