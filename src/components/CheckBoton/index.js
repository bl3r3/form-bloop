import React from 'react';
import { Button } from 'reactstrap';
import { MdPanoramaFishEye } from "react-icons/md";

import './CheckBoton.css';

export default class CheckBoton extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Button
                    className="Boton-check mt-5 ml-3"
                >
                    {this.props.title}<MdPanoramaFishEye className="icon-check-boton" />
                </Button>
            </React.Fragment>
        )
    }
}