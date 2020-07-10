import React from 'react';
import Header from './Header';
import Form from './Form';
import Buttons from './Buttons';

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
      <section className="section">
        <h2 className="section__header section__header--bordered">
          Dodaj nowe zadanie
        </h2>
        <Form />
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__header">Lista zadań</h2>
          <Buttons directionOfSort={directionOfSort} isShowingEnabled={isShowingEnabled} tasks={tasks} />
        </div>
        <ul className="list js-tasksList"></ul>
      </section>
    </main>
  );
}

export default App;
