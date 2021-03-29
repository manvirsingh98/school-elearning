import React from "react";
import { Form, Button } from "react-bootstrap";

const login = {
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  // height: "100vh",
  marginTop: "100px",
};

const formOuter = {
  width: "30%",
  padding: "80px 30px",
  backgroundColor: "rgba(133, 20, 76, 0.9)",
  color: "#ffffff",
};
const SignupPage = () => {
  return (
    <div className="signup" style={login}>
      <div className="form-outer" style={formOuter}>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
