import React from "react";
import { List, Item, ToggleDoneButton, DeleteButton, Content, StyledLink } from "./styled";
import doneImage from "./done.svg";
import deleteImage from "./delete.svg";
import { selectTasksState, removeTask, toggleTaskDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { toTask } from "../../../../routes";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const { hideDoneTasks, sortDirection } = useAppSelector(selectTasksState);
  const tasks = useAppSelector(state => selectTasksByQuery(state, query));
  const dispatch = useAppDispatch();
  const sortedTasks = [...tasks].sort(
    (a, b) => sortDirection === "asc" ? b.content.localeCompare(a.content) : a.content.localeCompare(b.content)
  );

  return (
    <List>
      {sortedTasks.map(({ id, content, done }) => (
        <Item
          key={id}
          hide={hideDoneTasks && done}
        >
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(id))}>
            {done && <img height={15} src={doneImage} alt="done" />}
          </ToggleDoneButton>
          <Content done={done}>
            <StyledLink to={toTask({ id })}>{content}</StyledLink>
          </Content>
          <DeleteButton onClick={() => dispatch(removeTask(id))}>
            <img height={15} src={deleteImage} alt="delete" />
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
