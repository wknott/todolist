import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const focusInput = () => {
    inputRef.current.focus();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const nameWithoutWhitespace = newTaskName.trim();
    if (nameWithoutWhitespace) {
      dispatch(addTask({
        name: nameWithoutWhitespace,
        done: false,
        id: nanoid(),
      }));
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