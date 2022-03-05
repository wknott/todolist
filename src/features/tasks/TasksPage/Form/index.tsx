import React, { useState, useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { StyledForm, Button } from './styled';
import { addTask } from '../../tasksSlice';
import Input from '../Input';
import { useAppDispatch } from '../../../../hooks';

function Form() {
  const [newTaskContent, setNewTaskContent] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const focusInput = (): void => {
    const input = inputRef.current;
    if (input) {
      input.focus();
    }
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const contentWithoutWhitespace = newTaskContent.trim();
    if (contentWithoutWhitespace) {
      dispatch(addTask({
        content: contentWithoutWhitespace,
        done: false,
        id: nanoid(),
      }));
      setNewTaskContent('');
    }

    focusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={
          ({ target }: React.ChangeEvent<HTMLInputElement>) => setNewTaskContent(target.value)
        }
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
}

export default Form;
