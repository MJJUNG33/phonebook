import React from "react";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const searchContact = useSelector((state) => state.searchContact);
  console.log(contactList);

  return (
    <div>
      <SearchBar />
      <p className="mt-5 list-number">
        Result:{searchContact ? searchContact.length : contactList.length}
      </p>
      {searchContact
        ? searchContact.map((item, key) => (
            <ContactItem item={item} key={key} />
          ))
        : contactList.map((item, key) => <ContactItem item={item} key={key} />)}
    </div>
  );
};

export default ContactList;
