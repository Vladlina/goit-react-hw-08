import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

export default function ContactList() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {isLoading && (
        <h2 style={{ marginBottom: "12px", color: "#ffbf00" }}>Loading...</h2>
      )}
      {isError && (
        <h2 style={{ marginBottom: "12px", color: "#ba0021" }}>Error...</h2>
      )}

      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
