import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import HeaderInicio from '../HeaderHome'
import Header from '../Header';
import Footer from '../Footer';

export default class Layout extends React.Component{
    render (){
        return (
            <React.Fragment>
                <HeaderInicio/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}