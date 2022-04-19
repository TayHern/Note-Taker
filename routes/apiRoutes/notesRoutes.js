const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/Notes');
const { db } = require('../../db/db.json');

//get all notes from database
router.get('/notes' , (req, res) => {
    let result = notes;
    if (req.query) {
        result = filterByQuery(req.query, results);
    }
    res.json(db);
});

//create a new note when save is clicked
router.post('/notes' , (req, res) => {
    req.body.id = db.length.toString();

    const note = createNewNote(req.body, db);
    res.json(note);
});

//delete a note when clicked
router.delete('/notes/:id' , (req, res) => {
    const note = deleteNote(req.body, db);
    res.json(note);
});

module.exports = router;