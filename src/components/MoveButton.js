import React from "react";

function MoveButton({id, onMove}) {
    return(
        <button className="btn-archieve" onClick={() => onMove(id)}>
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
        </button>
    )
}
export default MoveButton;