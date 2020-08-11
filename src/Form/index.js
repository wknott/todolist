import React, { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

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
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskName}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskName(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  )
}

export default Form;