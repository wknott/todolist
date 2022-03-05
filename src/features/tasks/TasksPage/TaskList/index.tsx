/* eslint-disable global-require */
import React from 'react';
import {
  List, Item, ToggleDoneButton, DeleteButton, Content, StyledLink,
} from './styled';
import {
  selectTasksState, removeTask, toggleTaskDone, selectTasksByQuery,
} from '../../tasksSlice';
import searchQueryParamName from '../searchQueryParamName';
import { useQueryParameter } from '../queryParameters';
import { toTask } from '../../../../routes';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

function TaskList() {
  const query = useQueryParameter(searchQueryParamName);
  const { hideDoneTasks, sortDirection } = useAppSelector(selectTasksState);
  const tasks = useAppSelector((state) => selectTasksByQuery(state, query));
  const dispatch = useAppDispatch();
  const sortedTasks = [...tasks].sort(
    (a, b) => (sortDirection === 'asc' ? b.content.localeCompare(a.content) : a.content.localeCompare(b.content)),
  );

  return (
    <List>
      {sortedTasks.map(({ id, content, done }) => (
        <Item
          key={id}
          hide={hideDoneTasks && done}
        >
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(id))}>
            {done && <img height={15} src="/todolist/done.svg" alt="done" />}
          </ToggleDoneButton>
          <Content done={done}>
            <StyledLink to={toTask({ id })}>{content}</StyledLink>
          </Content>
          <DeleteButton onClick={() => dispatch(removeTask(id))}>
            <img height={15} src="/todolist/delete.svg" alt="delete" />
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
}

export default TaskList;
