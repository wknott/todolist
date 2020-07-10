import React from 'react';
import Header from './Header';
import Form from './Form';
import Buttons from './Buttons';
import Tasks from './Tasks';
import Section from './Section';
const tasks = [
  {
    id: 1,
    name: "Dodać interakcję do aplikacji",
    done: false
  },
  {
    id: 2,
    name: "Przenieść aplikację do React.js",
    done: true
  },
]
const directionOfSort = null;
const isShowingEnabled = true;

function App() {
  return (
    <main>
      <Header title="Lista zadań" />
      <Section
        title={"Dodaj nowe zadanie"}
        sectionBody={<Form />}
      />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={<Buttons directionOfSort={directionOfSort} isShowingEnabled={isShowingEnabled} tasks={tasks} />}
        sectionBody={<Tasks tasks={tasks} isShowingEnabled={isShowingEnabled} />}
      />
    </main>
  );
}

export default App;
