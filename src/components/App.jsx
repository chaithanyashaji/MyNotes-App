import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getNotes, createNote, deleteNote } from '../services/noteService';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await getNotes();
    setNotes(response.data);
  };

  const addNote = async (newNote) => {
    const response = await createNote(newNote);
    setNotes(prevNotes => {
      return [...prevNotes, response.data];
    });
  };

  const removeNote = async (id) => {
    await deleteNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => noteItem.id !== id);
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
