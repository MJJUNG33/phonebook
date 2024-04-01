import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };

  return (
    <div>
      <Form className="register-form" onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="name-input">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label className="contact-input">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="register-btn">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
