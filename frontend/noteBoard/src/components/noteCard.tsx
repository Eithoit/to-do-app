import { Delete } from "lucide-react";

interface CardNoteProps {
  note: {
    _id: string;
    title: string;
    content: string;
  };
  onDelete: (id: string) => void;
}

const CardNote: React.FC<CardNoteProps> = ({ note, onDelete }) => {
  return (
    <div className="bg-[var(--card-bg)] shadow-md rounded-lg p-4 m-2 w-64 hover:shadow-[var(--card-hover-shadow)] transition">
      <h3 className="font-bold mb-2">{note.title}</h3>
      <p className="mb-4">{note.content}</p>
      <button
        onClick={() => onDelete(note._id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center gap-1"
      >
        <Delete size={16} /> Delete
      </button>
    </div>
  );
};

export default CardNote;
