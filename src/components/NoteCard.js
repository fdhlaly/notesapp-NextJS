import { FaTrash, FaEye } from "react-icons/fa";

const NoteCard = ({ note, onView, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="font-bold text-xl mb-2">{note.title}</div>
      <p className="text-gray-700 text-base truncate">{note.description}</p>
      <div className="mt-4 flex justify-between">
        <span className="text-gray-500 text-sm">{note.date}</span>
        <div className="flex space-x-2">
          <button
            className="text-green-500 hover:text-green-400"
            onClick={() => onView(note)}
          >
            <FaEye size={20} />
          </button>
          <button
            className="text-red-500 hover:text-red-400"
            onClick={() => onDelete(note.id)}
          >
            <FaTrash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
