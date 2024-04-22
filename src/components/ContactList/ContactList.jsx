// import Contact from "../../components/Contact";
import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectFilter = useSelector((state) => state.filters.name);

  const visibleContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((item) => (
        <li className={css.contact} key={nanoid()}>
          <Contact contacts={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
