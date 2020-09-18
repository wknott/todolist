import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled";
import Input from "../Input";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const focusInput = () => {
    inputRef.current.focus();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentWithoutWhitespace = newTaskContent.trim();
    if (contentWithoutWhitespace) {
      dispatch(addTask({
        content: contentWithoutWhitespace,
        done: false,
        id: nanoid(),
      }));
      setNewTaskContent("");
    }
    focusInput();
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  )
}

export default Form;