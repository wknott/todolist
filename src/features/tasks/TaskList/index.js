import React from "react";
import { List, Item, ToggleDoneButton, DeleteButton, Content } from "./styled";
import doneImage from "./done.svg";
import deleteImage from "./delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, removeTask, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(({ id, name, done }) => (
        <Item
          key={id}
          hide={hideDoneTasks && done}
        >
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(id))}>
            {done && <img height={15} src={doneImage} alt="done" />}
          </ToggleDoneButton>
          <Content>
            {done ? <s>{name}</s> : name}
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