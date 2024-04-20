import { useId } from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  const userId = useId();

  return (
    <div className={css.container}>
      <label htmlFor={userId}>Find contacts by name</label>
      <input
        className={css.input}
        id={userId}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
export default SearchBox;
