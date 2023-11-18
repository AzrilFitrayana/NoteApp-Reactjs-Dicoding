import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return(
        <>
            <h2>Catatan Aktif</h2>
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