import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all birthdays</button>
        <button onClick={() => setPeople(data)}>all birthdays</button>
      </section>
    </main>

  );
}

export default App;
