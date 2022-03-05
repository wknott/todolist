import React from 'react';
import { ButtonsContainer } from './styled';
import Button from '../Button';
import {
  selectTasksState,
  toggleHideDoneTasks,
  markAllTasksAsDone,
  toggleSortDirection,
} from '../../tasksSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

function Buttons() {
  const { tasks, hideDoneTasks, sortDirection } = useAppSelector(selectTasksState);
  const dispatch = useAppDispatch();

  return (
    <ButtonsContainer>
      {tasks.length > 0
        && (
          <>
            <Button onClick={() => dispatch(toggleSortDirection())}>
              Posortuj zadania
              {' '}
              {sortDirection === 'asc' ? '↑' : '↓'}
            </Button>
            <Button onClick={() => dispatch(toggleHideDoneTasks())}>
              {hideDoneTasks ? 'Pokaż ukończone' : 'Ukryj ukończone'}
            </Button>
            <Button
              onClick={() => dispatch(markAllTasksAsDone())}
              disabled={tasks.every(({ done }) => done)}
            >
              Ukończ wszystkie
            </Button>
          </>
        )}
    </ButtonsContainer>
  );
}

export default Buttons;
