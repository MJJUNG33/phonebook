import React from "react";
import { Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  return (
    <div>
      <Form className="register-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="name-input">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label className="contact-input">Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" />
        </Form.Group>

        <Button variant="primary" type="submit" className="register-btn">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
