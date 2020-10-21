import React, {useState, useEffect} from "react";

function Details(props) {
    return (
    <div>
        <p>
          {props.data.explanation}
        </p>
        <p>
          Copyright : {props.data.copyright} | Title : {props.data.title}
        </p>
    </div>
    );
  }

export default Details;