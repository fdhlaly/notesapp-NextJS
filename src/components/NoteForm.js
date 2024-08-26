import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newNote = {
      id: uuidv4(),
      title,
      description,
      date: new Date().toLocaleString(),
    };
    onAdd(newNote);
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Add Note</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 resize-none"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
          >
            Add Note
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
