const Modal = ({ note, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{note.title}</h2>
          <button
            className="text-gray-600 hover:text-gray-500"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <p className="mb-4 text-justify">{note.description}</p>
        <span className="text-gray-500 text-sm">{note.date}</span>
      </div>
    </div>
  );
};

export default Modal;
