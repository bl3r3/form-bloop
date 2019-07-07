import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from "../App"
import { Button as btn } from 'reactstrap';
import BotonDisabled from '../components/BotonDisabled';
import BotonRadius from '../components/BotonRadius';
import Tarjeta from '../components/Cards';
import CheckBoton from '../components/CheckBoton';
import FieldText from '../components/Input';
import Selection from '../components/Select';
import HeaderLayout from '../components/Header';
import FooterLayout from '../components/Footer';
import Layout from '../components/Layout';



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

  .add("BotonDisabled", () => (
    <div>
    <BotonDisabled title="TOLDOS"></BotonDisabled>
    <br/>  
    <BotonDisabled title="LICOR"></BotonDisabled>
    </div>
  ))

  .add("BotonRadius", () => (
    <div>
      <BotonRadius title="¡EMPECEMOS!"></BotonRadius>
    </div>
  ))

  .add("Tarjeta", () => (
    <div>
      <Tarjeta option="OPCION 3">
      </Tarjeta>
    </div>
  ))

  .add("CheckBoton", () => (
    <div>
      <CheckBoton title="TEQUEÑOS"></CheckBoton>
    </div>
  ))

  .add("FieldText", () => (
    <div>
      <FieldText></FieldText>
    </div>
  ))
  
  .add("Selection", () => (
    <div>
      <Selection></Selection>
    </div>
  ));

  storiesOf("Layout Components", module)
  .add("Header", () =>(
    <div>
      <HeaderLayout></HeaderLayout>
    </div>
  ))
  .add("Footer", () =>(
    <div>
      <FooterLayout></FooterLayout>
    </div>
  ))

  .add("Layout-home", () =>(
    <Layout>
      <Container fluid>
        <Row className="align-items-center">
          <Col
            md={{ size: 10, offset: 1 }}
          >
            <h1 className="text-center ">¡Bienvenido a nuestra cotización digital!</h1>
            <h5 className="text-center">Responder el siguiente cuestionario para poder innovar tu celebracíon</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <BotonRadius title="¡EMPECEMOS!" className="text-center"></BotonRadius>
          </Col>
        </Row>
      </Container>
    </Layout>
  ))




storiesOf("App", module).add("default", () => <App />);