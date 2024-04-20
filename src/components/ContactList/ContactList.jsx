import Contact from "../../components/Contact";
import { nanoid } from "nanoid";
import css from "./ContactList.module.css";

const ContactList = ({ contactUser, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactUser.map((item) => (
        <li className={css.contact} key={nanoid()}>
          <Contact contacts={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
