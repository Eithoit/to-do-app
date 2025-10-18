import { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../service/noteService.ts";
import CardNote from "../components/noteCard.tsx";
import { NotebookPenIcon, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const navigate = useNavigate();

  // Fetch all notes on mount
  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    };
    fetchNotes();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="min-h-screen bg-[var(--body-bg)] text-white flex flex-col items-center p-6">
      <header className="bg-[var(--header-bg)] w-full p-4 flex justify-between items-center rounded-md shadow-md">
        <h1 className="text-2xl font-bold">🗒️ Note Board</h1>
        <button
          onClick={() => navigate("/create")}
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 flex items-center gap-2"
        >
          <Plus /> Create Note
        </button>
      </header>

      <div className="flex flex-wrap justify-center mt-6 gap-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <CardNote key={note._id} note={note} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-300 font-mono items-center"><NotebookPenIcon className="w-20 h-20 " /> No notes yet. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
