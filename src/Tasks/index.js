import React from "react";
import "./styles.css";
import doneImage from "./done.svg";
import deleteImage from "./delete.svg";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(({ id, name, done }) => (
      <li
        key={id}
        className={`list__item${hideDoneTasks && done ? " list__item--hide" : ""}`}
      >
        <button
          className="list__button list__button--done"
          onClick={() => toggleTaskDone(id)}
        >
          {done && <img height={15} src={doneImage} alt="done" />}
        </button>
        <p className="list__paragraph">
          {done ? <s>{name}</s> : name}
        </p>
        <button
          className="list__button list__button--remove "
          onClick={() => removeTask(id)}
        >
          <img height={15} src={deleteImage} alt="delete" />
        </button>
      </li>
    ))}
  </ul >
)

export default Tasks;