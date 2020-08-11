import React from "react";
import { TasksList, Item, ToggleDoneButton, DeleteButton, Content } from "./styled";
import doneImage from "./done.svg";
import deleteImage from "./delete.svg";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map(({ id, name, done }) => (
      <Item
        key={id}
        hide={hideDoneTasks && done}
      >
        <ToggleDoneButton onClick={() => toggleTaskDone(id)}>
          {done && <img height={15} src={doneImage} alt="done" />}
        </ToggleDoneButton>
        <Content>
          {done ? <s>{name}</s> : name}
        </Content>
        <DeleteButton onClick={() => removeTask(id)}>
          <img height={15} src={deleteImage} alt="delete" />
        </DeleteButton>
      </Item>
    ))}
  </TasksList>
)

export default Tasks;