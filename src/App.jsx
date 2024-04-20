import "./App.css";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import contacts from "./contacts.json";

function App() {
  const [users, setUsers] = useState(() => {
    const userLocal = localStorage.getItem("users");
    return userLocal ? JSON.parse(userLocal) : [];
  });

  const [nameFilter, setNameFilter] = useState("");

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList contactUser={visibleUsers} onDelete={deleteUser} />
    </div>
  );
}

export default App;
