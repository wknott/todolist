import React from 'react';
import Header from './Header';
import Form from './Form';
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
          <div className="section__buttonsContainer js-buttonsContainer"></div>
        </div>
        <ul className="list js-tasksList"></ul>
      </section>
    </main>
  );
}

export default App;
