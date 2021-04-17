import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const CustomJumbotron = ({ title }) => {
  return (
    <Jumbotron fluid>
      <Container>
        <h3 className="text-center text-muted mb-0">{title}</h3>
      </Container>
    </Jumbotron>
  );
};

export default CustomJumbotron;
