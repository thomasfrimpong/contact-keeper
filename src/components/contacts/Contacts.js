import React, { Fragment, useContext, useEffect } from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";
import ContactContext from "../../context/contacts/ContactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  useEffect(() => {
    console.log(contacts);
  });

  return (
    <div>
      <TransitionGroup>
        {filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
export default Contacts;
