import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './header.css';

const Logotipo = require("./Logo-Bloop.png");

export default class HeaderHome extends React.Component{
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
                </Row>
            </Container>
        )
    }
} 