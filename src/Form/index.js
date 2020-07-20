import React, { useState } from "react";
import "./styles.css";

const Form = ({ addTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const nameWithoutWhitespace = newTaskName.trim();
    if (nameWithoutWhitespace) {
      addTask(nameWithoutWhitespace);
      setNewTaskName("");
    }
  }

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        value={newTaskName}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskName(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
}

export default Form;