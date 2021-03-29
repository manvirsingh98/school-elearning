import React from "react";
import {
  Col,
  Container,
  Row,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <div className="logo text-white p-4 left">
              <h1 className="mb-4">
                1<span style={{ color: "rgba(133, 20, 76, 0.9)" }}>ROOM</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="right ">
              <h4 className="mb-4">Newsletter!</h4>
              <form>
                <InputGroup>
                  <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button className="b">Submit</Button>
                  </InputGroup.Append>
                </InputGroup>
              </form>
              <div className="social-media-links">
                <a
                  className="social-media-link social-media-link--facebook"
                  href="/social"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="social-media-link social-media-link--twitter"
                  href="/social"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="social-media-link social-media-link--instagram"
                  href="/social"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="social-media-link social-media-link--linkedin"
                  href="/social"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="social-media-link social-media-link--youtube"
                  href="/social"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={12}>
            <p>© 2021 1ROOM. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
