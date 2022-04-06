import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import CounterTwo from './Components/CounterTwo';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterTwo /> */}
      <h2>Synchronous vs Asynchronous</h2>
      <Users />
    </div>
  );
}

export default App;
