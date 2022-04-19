const fs = require('fs');
const path = require('path');

function createNewNote(body, dbArray) {
    const note = body;
    dbArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json',)
          JSON.stringify(dbArray)
    );
    return note;
}

function deleteNote(param, dbArray) {
    const index = dbArray.findIndex(db => db.id === param);

    dbArray.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json',)
          JSON.stringify(dbArray)
    );
}

module.exports = createNewNote, deleteNote;