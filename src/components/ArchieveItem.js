import React from "react";
import MoveButton from "./MoveButton";
import DeleteButon from "./DeleteButton";

function ArchieveItem({title, createdAt, body, id, onDelete, onMove}) {
    return(
            <div className="note-item">
                <div className="note-content">
                    <div className="content-wrapper">
                        <h3 className="note_item__title">{title}</h3>
                        <p className="note_item__createdAt">{createdAt}</p>
                        <p className="note-item__body">{body}</p>
                    </div>
                    <div className="button-wrapper">
                        <MoveButton id={id} onMove={onMove}/>
                        <DeleteButon id={id} onDelete={onDelete}/>
                    </div>
                </div>
            </div>
        
    )
}

export default ArchieveItem;