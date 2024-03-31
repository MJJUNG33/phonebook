import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <Form lg={8} className="search-bar">
        {" "}
        <Form.Label>Contact list</Form.Label>
        <Form.Group className="search-input">
          {" "}
          <Form.Control
            type="search"
            placeholder="Enter name for search"
            className="me-2"
            aria-label="Search"
          />
          <Button lg={4} variant="primary">
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
