import React from "react";

function ArchieveButon({id , onArchive}) {
    return(
        <button className="btn-archieve" id={id} onClick={() => onArchive(id)}>
            <ion-icon name="archive-outline"></ion-icon>
        </button>
    )
}
export default ArchieveButon;