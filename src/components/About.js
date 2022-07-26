import React from "react";

function About(props){
    return(
        <div>
            <aside>
                if(props){
                    <img alt="blog logo" src={props.image} />
                 }
                 else {<img alt="blog logo" src={"https://via.placeholder.com/215"} />}
                 <p>{props.About}</p>
            </aside>
        </div>
    )
}

export default About;