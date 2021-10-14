import React, { Fragment, useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contacts/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    type: "personal",
  });

  const { id, name, phone, email, type } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        phone: "",
        email: "",
        type: "personal",
      });
    }
  }, [current, contactContext]);

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    clearCurrent();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h2>{current ? "Update Contact" : "Add Contact"}</h2>
        <input
          type="text"
          onChange={onChange}
          name="name"
          value={name}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={onChange}
          name="phone"
          value={phone}
          placeholder="Phone"
        />
        <input
          type="text"
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
        />
        <div>
          <h5>Contact Type</h5>
          <input
            type="radio"
            name="type"
            onChange={onChange}
            value="professional"
            checked={type === "professional"}
          />{" "}
          Professional
          <input
            type="radio"
            name="type"
            onChange={onChange}
            value="personal"
            checked={type === "personal"}
          />{" "}
          Personal
        </div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
        {current !== null && (
          <button
            className="btn btn-light btn-block"
            onClick={clearCurrent}
            type="button"
          >
            Clear Current
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default ContactForm;
