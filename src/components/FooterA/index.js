import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaAngleUp } from "react-icons/fa";


export default class Footer extends React.Component{
    render(){
        return (
            <React.Fragment>
                <footer>
                <Container>
                    <Row>
                        <Col>
                            <FaAngleUp />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p> AVILA Design Studio / Todos los derechos reservados </p>
                        </Col>
                    </Row>
                </Container>
                </footer>
            </React.Fragment>
        )
    }
}