import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import '../Cards/Card.css';    

    export default class LoadImg extends React.Component{
        render(){
            return (
                <React.Fragment>
                   <Card className="card mt-5">
                   <img 
                   width="100%" 
                   src="https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png" 
                   alt="Card image cap" 
                   className="img-card"
                   />
                   </Card>
                </React.Fragment>
            )
        }
    }