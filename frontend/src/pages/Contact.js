import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "formik";
import * as Yup from "yup";

import "./Contact.css";

import CustomJumbotron from "../components/CustomJumbotron";
import CustomForm from "../components/forms/CustomForm";
import CustomInput from "../components/forms/CustomInput";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const Contact = () => {
  return (
    <div className="contact">
      <CustomJumbotron title="CONTACT US" />
      <Container>
        <Row>
          <Col md={12}>
            <div className="contact-form">
              <CustomForm
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
              >
                <Form>
                  <CustomInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                  />

                  <CustomInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                  />

                  <CustomInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="jane@formik.com"
                  />
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </Form>
              </CustomForm>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
