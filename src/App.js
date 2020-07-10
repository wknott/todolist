import React from 'react';
import Header from './Header';
function App() {
  return (
    <main>
      <Header title="Lista zadań" />
      <section class="section">
        <h2 class="section__header section__header--bordered">
          Dodaj nowe zadanie
        </h2>
        <form class="form js-form">
          <input
            class="form__input js-newTask"
            placeholder="Co jest do zrobienia?"
            autofocus
          />
          <button class="form__button">Dodaj zadanie</button>
        </form>
      </section>
      <section class="section">
        <div class="section__container">
          <h2 class="section__header">Lista zadań</h2>
          <div class="section__buttonsContainer js-buttonsContainer"></div>
        </div>
        <ul class="list js-tasksList"></ul>
      </section>
    </main>
  );
}

export default App;
