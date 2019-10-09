import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Notes from "./components/Notes";

function App() {
  const [ notes, setNotes] = useState([
    {
    id: 1,
    title: 'Chris Daley',
    email: "Chrisdaley801@gmail.com",
    role: "play",
    } 
  ]);

  const addMember = note => {
    const newMember = {
      id:Date.now(),
      title: note.title,
      email: note.email,
      role: note.role,
    };

    setNotes([...notes, newMember]);
  };
  return (
    <div className="App">
     <h1>My Team</h1>
     <Form addNoteFn={addMember} />
     <Notes notesList={notes}/>
    </div>
  );
}

export default App;
