import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Katherine Lewis" avatar="https://randomuser.me/api/portraits/women/95.jpg" online />
      <Contact name="Claudia Hart" avatar="https://randomuser.me/api/portraits/women/58.jpg" offline />
      <Contact name="Tracey Howard" avatar="https://randomuser.me/api/portraits/women/96.jpg" online />

    </div>
  );
}

export default App;
