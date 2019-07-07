import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './Input.css';

export default class FieldText extends React.Component{
    render (){
        return (
            <Form className="ml-5 mt-5">
                <FormGroup>
                    <Label className="LabelText">¡Excelente! Cuéntanos ¿quien es este gran artista?</Label>
                    <Input type="text" name="prueba"  className="FieldText" />
                </FormGroup>
            </Form>
        )
    }
}