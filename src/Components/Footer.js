import React from "react";


function Footer({itemCount}){
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemCount} </strong>
                items left
            </span>
	    </footer>

    )
}

export default Footer;