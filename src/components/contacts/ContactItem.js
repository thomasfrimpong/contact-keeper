import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contacts/ContactContext";

const ContactItem = ({ contact }) => {
  const { id, name, phone, email, type } = contact;
  const contactContext = useContext(ContactContext);
  const { setCurrent, deleteContact } = contactContext;

  const onCurrent = () => {
    setCurrent(contact);
  };

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span
          style={{ float: "right" }}
          className={
            "badge " + (type === "personal" ? "badge-primary" : "badge-success")
          }
        >
          {type}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope"></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i>
            {phone}
          </li>
        )}
      </ul>
      <button className="btn btn-dark btn-sm" onClick={onCurrent}>
        Edit
      </button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
