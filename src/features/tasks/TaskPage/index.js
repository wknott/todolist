import React from "react";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania!"}
        sectionBody={
          task && <><strong>Ukończono:</strong> {task.done ? "tak" : "nie"}</>
        }
      />
    </Container>
  );
}

export default TaskPage;
