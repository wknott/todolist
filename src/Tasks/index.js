import React from "react";
import "./styles.css";

const Tasks = ({ tasks, isShowingEnabled }) => (
  <ul className="list">
    {tasks.map(({ id, name, done }) => (
      <li
        key={id}
        className={`list__item ${isShowingEnabled || !done ? "" : "list__item--hide"}`}
      >
        <button className="list__button list__button--done">
          {done ? "✔" : " "}
        </button>
        <p className="list__paragraph">
          {done ? <s>{name}</s> : name}
        </p>
        <button className="list__button list__button--remove ">
          ❌
        </button>
      </li>
    ))}
  </ul >
)

export default Tasks;