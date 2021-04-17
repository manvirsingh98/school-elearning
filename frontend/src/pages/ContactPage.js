import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomJumbotron from "../components/CustomJumbotron";
import "./ContactPage.css";

const Contact = () => {
  return (
    <div className="contact">
      <CustomJumbotron title="CONTACT US" />
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
