import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButtonArchive from "./NoteButtonArchive";
import NoteButtonDelete from "./NoteButtonDelete";

function NoteItem({ title, createdAt, body }) {
    return(
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
            <div className="note-item__action">
                <NoteButtonDelete />
                <NoteButtonArchive />
            </div>
        </div>
    );
}

export default NoteItem;