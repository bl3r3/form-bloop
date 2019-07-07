import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { MdKeyboardArrowLeft } from 'react-icons/md';


import './footer.css';

export default class FooterLayout extends React.Component{
    render (){
        return (
            <footer>
            <Container className="footer" fluid>
                <Row>
                    <Col md="6"> <Button color="success" className="BotonBack"> <MdKeyboardArrowLeft className="arrow-left" />BACK</Button> </Col>
                    <Col md="6"> <Button color="danger" className="BotonNext float-right">Siguiente</Button></Col>
                </Row>
            </Container>
            </footer>
        )
    }
}