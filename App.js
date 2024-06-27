import React from 'react';
import './App.css';
import ListView from './ListView';

function App() {
  const items = ['Jayna', 'Sakshi', 'Sunita', 'Jenny'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React List View Example</h1>
      </header>
      <ListView items={items} />
    </div>
  );
}

export default App;
