import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    return(
        <>
            <h1>Catatan Aktif</h1>
            <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} {...note} />
                ))
            }
        </div>
        </>
    );
}

export default NoteList