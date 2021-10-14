import React, { useContext, useRef } from "react";
import ContactContext from "../../context/contacts/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef(" ");
  const { filterContacts } = contactContext;

  const filter = (e) => {
    filterContacts(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts.."
        onChange={filter}
      />
    </form>
  );
};

export default ContactFilter;
