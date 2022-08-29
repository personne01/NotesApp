import React from "react";

function Header({search}) {
    return(
        <div className="header">
            <div className="wrapper">
                <div className="logo">
                    <h1>Your Notes</h1>
                </div>
                
                <div className="search">
                    <input type="text" placeholder="Find Your Notes"></input>
                </div>
            </div>
        </div>
    )
}

export default Header;