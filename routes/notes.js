const express = require('express');
const router = express.Router();

const notesController = require("../controller/notesController");
const NoteValidator = require("../middleware/notesMW");




//requestStudentById
router.post("/noteid", notesController.getNoteById);

//createNewStudent 
router.post('/', NoteValidator, notesController.addNewNote);

//update
//router.put("/:id", studentController.updateStudent);

delete
    router.delete("/", notesController.deleteNote);




module.exports = router;