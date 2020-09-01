import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const nameWithoutWhitespace = newTaskName.trim();
    if (nameWithoutWhitespace) {
      addTask(nameWithoutWhitespace);
      setNewTaskName("");
    }
    focusInput();
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskName}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskName(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  )
}

export default Form;