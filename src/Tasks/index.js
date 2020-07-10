import React from "react";
import "./styles.css";
import doneImage from "./done.svg";
import deleteImage from "./delete.svg";

const Tasks = ({ tasks, isShowingEnabled }) => (
  <ul className="list">
    {tasks.map(({ id, name, done }) => (
      <li
        key={id}
        className={`list__item ${isShowingEnabled || !done ? "" : "list__item--hide"}`}
      >
        <button className="list__button list__button--done">
          {done
            ? <img height={15} src={doneImage} alt="done" />
            : ""}
        </button>
        <p className="list__paragraph">
          {done ? <s>{name}</s> : name}
        </p>
        <button className="list__button list__button--remove ">
          <img height={15} src={deleteImage} alt="delete" />
        </button>
      </li>
    ))}
  </ul >
)

export default Tasks;