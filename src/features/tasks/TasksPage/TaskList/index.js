import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, ToggleDoneButton, DeleteButton, Content, StyledLink } from "./styled";
import doneImage from "./done.svg";
import deleteImage from "./delete.svg";
import { selectTasksState, removeTask, toggleTaskDone } from "../../tasksSlice";

const TaskList = () => {
  const { tasks, hideDoneTasks, sortDirection } = useSelector(selectTasksState);
  const dispatch = useDispatch();
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
            <StyledLink to={`/zadania/${id}`}>{content}</StyledLink>
          </Content>
          <DeleteButton onClick={() => dispatch(removeTask(id))}>
            <img height={15} src={deleteImage} alt="delete" />
          </DeleteButton>
        </Item>
      ))}
    </List>
  )
}

export default TaskList;