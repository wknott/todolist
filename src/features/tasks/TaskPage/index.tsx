import React from "react";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import Container from '../../../common/Container';
import { useAppSelector } from "../../../hooks";

const TaskPage = () => {
  const { id } = useParams();
  const task = useAppSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania!"}
        sectionBody={task &&
          <>
            <strong>Ukończono:</strong> {task.done ? "tak" : "nie"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
