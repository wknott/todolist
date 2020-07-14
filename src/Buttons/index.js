import React from "react";
import "./styles.css";

const Buttons = ({ directionOfSort, hideDoneTasks, tasks }) => (
  <div className="buttons__container">
    {tasks.length > 0 &&
      <>
        <button className="buttons__button">
          Posortuj zadania {directionOfSort === null ? "" : directionOfSort === "asc" ? "↓" : "↑"}
        </button>
        <button className="buttons__button">
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button className="buttons__button" disabled={tasks.every(({ done }) => done)}>
          Ukończ wszystkie
        </button>
      </>
    }
  </div>
)

export default Buttons;