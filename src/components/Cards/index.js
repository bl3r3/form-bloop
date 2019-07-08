import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import './Card.css';    

    export default class Tarjeta extends React.Component{
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
                        <Button
                            className="Boton-card mt-3 ml-2 mb-1"
                        >{this.props.option}</Button>

                   </Card>
                </React.Fragment>
            )
        }
    }