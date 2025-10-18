import express from "express";
import dotenv from "dotenv";
import noteBoardRouter from "./routes/noteBoardRouter.js"; 
import connectDB from "./config/db.js"; // ✅ fixed import
import cors from "cors";

dotenv.config({ path: "./config/.env" });

console.log("Mongo URI:", process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/noteBoards", noteBoardRouter);
app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  connectDB(); // ✅ connect DB after server starts
});
