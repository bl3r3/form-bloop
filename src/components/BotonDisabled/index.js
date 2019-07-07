import React from 'react';
import {Button} from 'reactstrap';

import './BotonDisable.css';

export default class BotonDisable extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Button 
                    className="Boton-Disable mb-2"
                >{this.props.title}</Button>
            </React.Fragment>
        )

    }
}