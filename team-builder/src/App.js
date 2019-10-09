import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";

function App() {
  const [ notes, setNotes] = useState([
    {
    id: 1,
    title: 'Chris',
    email: "no@no.com",
    role: "play",
    } 
  ]);

  return (
    <div className="App">
     <h1>My Team</h1>
     <Form />
    </div>
  );
}

export default App;
