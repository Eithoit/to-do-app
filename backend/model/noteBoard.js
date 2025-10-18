import mongoose from "mongoose";

const noteBoardSchema = new mongoose.Schema({
    title : {type: String, required: true},
    content : {type: String, required: true},
    completed : {type: Boolean, default: false}
}, {timestamps: true});

const NoteBoard = mongoose.model("NoteBoard", noteBoardSchema);

export { noteBoardSchema, NoteBoard };