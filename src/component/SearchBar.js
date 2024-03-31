import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <Form lg={10} className="search-bar">
        {" "}
        <Form.Control
          type="search"
          placeholder="Name"
          className="me-2"
          aria-label="Search"
        />
        <Button lg={2} variant="primary">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
