import React from "react";
import ArchieveItem from "./ArchieveItem";


function ArchieveList({notes, onDelete, onMove}) {
    return(
        <div className="note-list">
        <h1>Archieves</h1>
            {
                notes.map((note) => (
                    <ArchieveItem 
                    key={note.id} 
                    id = {note.id}
                    onMove = {onMove}
                    onDelete = {onDelete}
                    {...note} />
                ))
            }
        </div>
    )
}

export default ArchieveList;