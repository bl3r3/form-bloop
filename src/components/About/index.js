import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import  './index.css';


import LogoAbout from '../../img/image1.png';

export default class About extends React.Component{
    render(){
        return (
            <React.Fragment>
               <Container fluid>
                   <Row>
                       <Col>
                       <h1 className="text-about">AVILA DESIGN STUDIO</h1>
                       </Col>
                   </Row>
                    <Row>
                        <Col md={{ size: 4, offset:1}}>
                            <img src={LogoAbout}  className="img-about"/>
                        </Col>
                        <Col md="7">
                        <p className="parrafo-about"> El diseño no tiene solo una función
                                estética, el buen diseño tiene que ser
                                útil, una marca no puede limitarse a
                                ser agradable a la visa, debe dejar un
                                mensaje, debe ser memorable, y en este
                                estudio, una buena marca es nuestra
                                prioridad.
                        </p>
                         <a href=""> <Button className="BTN-MORE">SABER MAS</Button></a>
                        </Col>    
                    </Row>   
                </Container> 
            </React.Fragment>
        )
    }
}