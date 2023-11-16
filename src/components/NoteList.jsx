import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return(
        <>
            <h1>Catatan Aktif</h1>
            <br />
            <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} id={notes.id} onDelete={onDelete} {...note} />
                ))
            }
        </div>
        </>
    );
}

export default NoteList