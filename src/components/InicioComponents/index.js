import React from 'react';
import { Container, Row, Col } from 'reactstrap';


import HeaderHome from '../HeaderHome';
import Footer from '../Footer';

export default class Layout extends React.Component{
    render (){
        return (
            <React.Fragment>
                <HeaderHome />
                <div>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}