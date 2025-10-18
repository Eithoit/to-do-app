import { useState } from "react";
import { createNote } from "../service/noteService";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createNote(formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[var(--body-bg)] text-white flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--card-bg)] text-black p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Create Note</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded border border-gray-300"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded border border-gray-300"
        />
        <button
          type="submit"
          className="bg-[var(--header-bg)] text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
