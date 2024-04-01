import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const searchContact = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_CONTACT", payload: { searchInput } });
  };

  return (
    <div>
      <Form lg={8} className="search-bar" onSubmit={searchContact}>
        {" "}
        <Form.Label>Contact list</Form.Label>
        <Form.Group className="search-input">
          {" "}
          <Form.Control
            type="search"
            placeholder="Enter name for search"
            className="me-2"
            aria-label="Search"
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <Button lg={4} variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
