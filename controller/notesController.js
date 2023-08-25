const Note = require("../model/noteModel");

//create 
let addNewNote = (req, res) => {
    let std = Note({
        title: req.body.title,
        content: req.body.content,
        userid: req.body.userid
    });
    std.save().then(() => {
        res.send(std);
    }).catch((err) => {
        for (let e in err.errors) {
            console.log(err.errors[e].message);
        }
    });
}

//getStudentById

let getNoteById = async (req, res) => {
    try {
        let std = await Note.find({ userid: req.body.userid });
        if (Object.keys(std).length === 0) return res.status(404).json([{ status: "not found" }]);
        res.send(std);
    } catch (err) {
        for (let e in err.errors) {
            console.log(err.errors[e].message);
        }
    }
}

//getAllStudents

let getAllStudents = async (req, res) => {
    let std = await Note.find().select({ fn: 1, ln: 1, dept: 1 });
    res.send(std);
}

//update

let updateStudent = async (req, res) => {
    std = await Note.findOneAndUpdate(req.params.id, req.body, {
        returnOriginal: false,
    });
    if (!std) return res.status(404).send("not found");
    res.send(std);
}

//delete

let deleteNote = async (req, res) => {
    std = await Note.findByIdAndRemove({ _id: req.body.id });
    if (!std) return res.status(404).send("not found");
    res.json({ status: "success" });
}

module.exports = {
    addNewNote,
    getNoteById,
    getAllStudents,
    updateStudent,
    deleteNote
}