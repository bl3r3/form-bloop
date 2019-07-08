import React from 'react';
import { Container, Row, Col } from 'reactstrap';


import Header from '../Header';
import Footer from '../Footer';

export default class LayoutMain extends React.Component{
    render (){
        return (
            <React.Fragment>
                <Header/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}