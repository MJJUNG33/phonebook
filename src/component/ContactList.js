import React from "react";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";

const ContactList = () => {
  return (
    <div>
      <SearchBar />
      <p className="mt-5 list-number">Result:</p>
      <ContactItem />
    </div>
  );
};

export default ContactList;
