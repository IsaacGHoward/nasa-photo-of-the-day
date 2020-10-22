import React from "react";
import APOD from './APOD';
import Details from './details';
import { Spinner } from 'reactstrap';
function Container(props) {
  console.log(props);
  if(!props.data) return <div className="loader"><Spinner style={{ width: '3rem', height: '3rem' }} /></div>
  
    return (
      <div className="Container">
          <APOD image={props.data.hdurl} title={props.data.title}/>
          <Details data={props.data}/>
      </div>
    );
  }

export default Container;