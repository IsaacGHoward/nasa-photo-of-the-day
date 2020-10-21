import React, {useState, useEffect} from "react";

function APOD(props) {
    console.log("APOD")
    return (
        <img src={props.image} href={props.title}/>
    );
  }

export default APOD;