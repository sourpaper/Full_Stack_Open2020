import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let foundIt = false;

    for (const person of persons) {
      if (newName === person.name) {
        foundIt = true;
        alert(`${newName} has already been added`);
      }
    }

    if (foundIt) {
      setNewName("");
    } else {
      setPersons(persons.concat({ name: newName }));
    }
  };
  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.name}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
