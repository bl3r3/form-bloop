import React from 'react';
import {Button} from 'reactstrap';

import './BotonRadius.css';

export default class BotonRadius extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Button
                    className="Boton-Radius mt-3"
                >
                    {this.props.title}
                </Button>
            </React.Fragment>
        )
    }
}