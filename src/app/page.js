"use client";

import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import Modal from "../components/Modal";
import { BiPlus } from "react-icons/bi";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const addNote = (note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const viewNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Notes App</h1>
        <h3 className="text-lg text-gray-300">Create your own notes!</h3>
      </header>
      <main className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onView={viewNote}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </main>
      <button
        className="fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-400 transition"
        onClick={() => setShowForm(true)}
      >
        <BiPlus size={30} />
      </button>
      {showForm && (
        <NoteForm onAdd={addNote} onClose={() => setShowForm(false)} />
      )}
      {selectedNote && (
        <Modal note={selectedNote} onClose={() => setSelectedNote(null)} />
      )}
    </div>
  );
};

export default Home;
