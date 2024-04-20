import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ contacts: { name, number, id }, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.page}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.page}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
