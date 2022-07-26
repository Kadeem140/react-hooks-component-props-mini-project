import React from "react";

function Header(props){
    console.log(props, "Header Props Object")
    return(
        <div>
            <header>
                <h1>{props.name}</h1>
            </header>
        </div>
    )
}

export default Header;