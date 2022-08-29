import React from "react";
import NoteItem from "./NoteItem";


function NoteList({notes, onArchive, onDelete}) {
    return(
        <div className="note-list">
        
        <h1>Notes</h1>
            {
                notes.map((note) => (
                    <NoteItem key={note.id}
                    id = {note.id}
                    onArchive = {onArchive}
                    onDelete = {onDelete}
                    {...note}
                    />
                ))
            }
        </div>
        
    )
}

export default NoteList;