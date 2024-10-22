import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactList() {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <h2 style={{ marginBottom: "12px", color: "#ffbf00" }}>Loading...</h2>
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
