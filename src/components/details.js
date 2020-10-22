import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

function Details(props) {
  //Copyright : {props.data.copyright ? props.data.copyright : 'N/A'}
    return (
    <div className="details">
        <p style={{margin: 'auto', marginTop: '.5rem', marginBottom: '.5rem'}}>
          {'Title: ' + props.data.title}
        </p>
        <Button color="primary" id="toggler" style={{ marginBottom: '.5rem' }}>More info</Button>
        <UncontrolledCollapse toggler="#toggler">
          <p>
            Explanation:  {props.data.explanation} | Copyright : {props.data.copyright ? props.data.copyright : 'N/A'}
          </p>
        </UncontrolledCollapse>
    </div>
    );
  }

export default Details;