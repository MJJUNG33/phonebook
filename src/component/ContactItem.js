import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row className="mt-2 mb-3">
      <Col lg={3}>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze"
          alt="user"
          width={80}
        />
      </Col>
      <Col lg={9}>
        <Row className="mb-3">name</Row>
        <Row>number</Row>
      </Col>
    </Row>
  );
};

export default ContactItem;
