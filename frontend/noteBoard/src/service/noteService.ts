const API_URL = "http://localhost:8000/api/noteBoards"; // adjust if needed

export const getNotes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createNote = async (noteData: { title: string; content: string }) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return res.json();
};

export const updateNote = async (id: string, noteData: { title: string; content: string }) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  return res.json();
};

export const deleteNote = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
};
