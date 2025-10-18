import { NoteBoard } from "../model/noteBoard.js"; // ✅ matches export

export const getAllNoteBoards = async (req, res ,next) => {
    try{
        const noteBoards = await NoteBoard.find();
        res.status(200).json(noteBoards);
    }
    catch(error){
        next(error);}
    };

    export const createNoteBoard = async (req, res ,next) => {
        try{
            const newNoteBoard = new NoteBoard(req.body);
            const savedNoteBoard = await newNoteBoard.save();
            res.status(201).json(savedNoteBoard);
        }
        catch(error){
            next(error);}
        };

    export const updateNoteBoard = async (req, res ,next) => {
        try{
            const updatedNoteBoard = await NoteBoard.findByIdAndUpdate(
                req.params.id,
                req.body,)
                res.status(200).json(updatedNoteBoard);
            }
            catch(error){
                next(error);}
            }

    export const deleteNoteBoard = async (req, res ,next) => {
        try{
            const deletedNoteBoard = await NoteBoard.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedNoteBoard);
        }
        catch(error){
            next(error);}
        };

    export const getNoteBoardById = async (req, res ,next) => {
        try{
            const noteBoard = await NoteBoard.findById(req.params.id);
            res.status(200).json(noteBoard);
        }
        catch(error){
            next(error);
        }
    };