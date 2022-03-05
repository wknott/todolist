import React from 'react';
import Button from '../Button';
import { fetchExampleTasks, selectLoading } from '../../tasksSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

function ExampleTasksButton() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? 'Ładowanie...' : 'Pobierz przykładowe zadania'}
    </Button>
  );
}

export default ExampleTasksButton;
