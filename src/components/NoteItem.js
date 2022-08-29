import React from "react";
import ArchieveButon from "./ArchieveButton";
import DeleteButon from "./DeleteButton";

function NoteItem({title, createdAt, body, id, onArchive, onDelete}) {
    return(
            <div className="note-item">
                <div className="note-content">
                    <div className="content-wrapper">
                        <h3 className="note_item__title">{title}</h3>
                        <p className="note_item__createdAt">{createdAt}</p>
                        <p className="note-item__body">{body}</p>
                    </div>
                    <div className="button-wrapper">
                        <ArchieveButon id={id} onArchive={onArchive} />
                        <DeleteButon id={id} onDelete={onDelete}/>
                    </div>
                </div>
            </div>
    )
}

export default NoteItem;