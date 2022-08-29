import React from "react";

function DeleteButon({id, onDelete}) {
    return(
        <button className="btn-delete" onClick={() => onDelete(id)}>
            <ion-icon name="close-circle-outline" className="icon-delete"></ion-icon>
        </button>
    )
}
export default DeleteButon;