import React, {useState, useEffect} from "react";
import APOD from './APOD';
import Details from './details';
function Container(props) {
  console.log(props);
  if(!props.data) return <h3>Loading ...</h3>;
  
    return (
      <div className="Container">
          <APOD image={props.data.hdurl} title={props.data.title}/>
          <Details data={props.data}/>
      </div>
    );
  }

export default Container;