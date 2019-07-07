import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './header.css';

const Logotipo = require("./Logo-Bloop.png");

export default class HeaderLayuot extends React.Component{
    render (){
        return (
            <Container fluid className="Header">
                <Row>
                    <Col md="2" className="header"> 
                    <img 
                        src={Logotipo} 
                        className="Logotipo"    
                    />
                    </Col>
                    <Col
                        md="8">
                    </Col>
                    <Col 
                        md="2" 
                        className="header2"
                    >
                        <ul>
                        <a><li>Icon1</li></a>
                        <a><li>Icon2</li></a>  
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
} 