import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  SET_CURRENT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    default:
      return state;
  }
};
