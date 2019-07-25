import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navigations from '../Navbar';
import Slides from '../Slider';
import About from '../About';
import Footer from '../FooterA';


export default class Landing extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Navigations/>
                <Slides/>
                <About/>
                <Footer/>

                

            </React.Fragment>
        )
    }
}