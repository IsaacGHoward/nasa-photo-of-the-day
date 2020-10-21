import React from "react";

function APOD(props) {
    return (
        <img src={props.image} href={props.title} onClick={()=> window.open(props.image, "_blank")}/>
    );
  }

export default APOD;