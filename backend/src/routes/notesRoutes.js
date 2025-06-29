import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deletedNote,
  getNoteById
} from "../controllers/notesControllers.js";

const router = express.Router();

// GET
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

//POST
router.post("/", createNote);

//PUT
router.put("/:id", updateNote);

//Delete
router.delete("/:id", deletedNote);

export default router;
