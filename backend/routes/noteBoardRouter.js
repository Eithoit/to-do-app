import express from 'express';
import { getAllNoteBoards, createNoteBoard, updateNoteBoard, deleteNoteBoard, getNoteBoardById } from '../controller/noteBoardController.js';

const noteBoardRouter = express.Router();

noteBoardRouter.get('/', getAllNoteBoards);
noteBoardRouter.post('/', createNoteBoard);
noteBoardRouter.put('/:id', updateNoteBoard);
noteBoardRouter.delete('/:id', deleteNoteBoard);
noteBoardRouter.get('/:id', getNoteBoardById);

export default noteBoardRouter;