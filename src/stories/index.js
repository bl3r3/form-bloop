import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


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
import InicioComponentes from '../components/InicioComponents'
import LayoutMain from '../components/LayoutMain';
import LoadImg from '../components/LoadImg';
import Slider from '../components/Slider';

import './index.css'



;

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

  .add("slider", () => (
    <div>
      <Slider />
    </div>
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

  .add("Layout-inicio", () =>(
    <InicioComponentes>
      <Container fluid>
        <Row className="align-items-center mt">
          <Col
            md={{ size: 10, offset: 1 }}
          >
            <h1 className="text-center IntroText">¡Bienvenido a nuestra cotización digital!</h1>
            <h5 className="text-center SecundaryText">Responder el siguiente cuestionario para poder innovar tu celebracíon</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <BotonRadius title="¡EMPECEMOS!" className="text-center"></BotonRadius>
          </Col>
        </Row>
      </Container>
    </InicioComponentes>
  ))

  .add("Layout-infog", () =>(
    <Layout>
      <Container fluid>
        <Row className="align-items-center">
          <Col className="text-center">
            <h1 className="text-center IntroText">Información General</h1>
            <h4 className="text-center SecundaryText">Cuentanos un poco mas sobre tu evento</h4>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 4 }}>
          <Form>
              <FormGroup className="form">
                <Label className="IntroText mt-3">Tipo de evento</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option></option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                <Label className="mt-3 IntroText">Fecha</Label>
                <Input></Input>
                <Label className="mt-3 IntroText">cantidad de invitados</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option></option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                <Label className="mt-3 IntroText">Horario (Opciona)</Label>
                  <Row>
                    <Col md="6">
                      <Input placeholder="Inicio" ></Input>
                    </Col>
                    <Col>
                      <Input placeholder="Fin"></Input>
                    </Col>
                  </Row>
                <Label className="mt-3 IntroText">locación</Label>
                <Input></Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  ))

  .add("Layout-2", () =>(
    <Layout>
      <Container fluid>
      <Row className="align-items-center">
          <Col className="text-center">
            <h1 className="text-center IntroText">Información General</h1>
            <h4 className="text-center SecundaryText">Cuentanos un poco mas sobre tu evento</h4>
          </Col>
        </Row>
        <Row className="align-items-center mt1">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="Display" />
            <BotonDisabled title="Talentos"/>
            <BotonDisabled title="COCTELERIA"/>
            <BotonDisabled title="MOBILIARIO"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="FOTOS" />
            <BotonDisabled title="VIDEOS"/>
            <BotonDisabled title="LICOR"/>
            <BotonDisabled title="SEGURIDAD"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="CATERING" />
            <BotonDisabled title="POSTRES"/>
            <BotonDisabled title="COTILLÓN"/>
            <BotonDisabled title="TOLDOS"/>
          </Col>
        </Row>
      </Container>
    </Layout>
  ))

  .add("Layout-3", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
          <h3 className="SecundaryText">Selecciona la opción de Display que más te guste</h3>
          </Col>
          <Col className="text-center" md="12">
          <h4 className="SecundaryText">Selecciona la opción de Display que más te guste</h4>
          </Col>
        </Row>
        <Row>
          <Col md={{size: 2, offset: 2}}>
            <Tarjeta option="Opcion 1"/>
          </Col>
          <Col md="2">
            <Tarjeta option="Opcion 2"/>
          </Col>
          <Col md="2">
            <Tarjeta option="Opcion 3"/>
          </Col>
          <Col md="2">
            <Tarjeta option="Opcion 4"/>
          </Col>
        </Row>
        <Row>
          <Col md={{size: 2, offset: 2}}>
            <Tarjeta option="Opcion 5"/>
          </Col>
          <Col md="2">
            <Tarjeta option="Opcion 6"/>
          </Col>
          <Col md="2">
            <Tarjeta option="Opcion 7"/>
          </Col>
          <Col md="2">
            <Tarjeta option="Opcion 8"/>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 IntroText">
            <p>Todas las opciones cuentan con un DJ por 8 horas continuas**</p>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))
  
  .add("Layout-4", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="SecundaryText">¿Qué típo de talento estas buscando? </h3>
          </Col>
        </Row>
        <Row className="btn-margin">
          <Col md="12" className="text-center">
            <BotonDisabled title="BIenvenida"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Artistas o Bandas"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Djs"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Bandas de Covers"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-5", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="IntroText">BIenvenida</h3>
          </Col>
          <Col>
            <h5 className="mt-5 text-center SecundaryText">Selecciona los talentos de bienvenida que desees</h5>
          </Col>
        </Row>
        <Row className="btn-margin-2">
          <Col md="12" className="text-center">
            <BotonDisabled title="Saxofonista "/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="violinista"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="banda de jazz"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="big band"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))
  
  .add("Layout-6", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="IntroText">artistas o bandas</h3>
          </Col>
          <Col>
            <h5 className="mt-5 text-center SecundaryText">Selecciona que tipo de artistas o bandas te gustaría</h5>
          </Col>
        </Row>
        <Row className="btn-margin-2">
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-7", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="IntroText">dj</h3>
          </Col>
          <Col>
            <h5 className="mt-5 text-center SecundaryText">Selecciona que tipo de DJ te gustaría para tu evento</h5>
          </Col>
        </Row>
        <Row className="btn-margin-2">
          <Col md="12" className="text-center">
            <BotonDisabled title="Britsio"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="marco allen"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="maskara"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="joss"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-8", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="IntroText">banda de cover</h3>
          </Col>
          <Col>
            <h5 className="mt-5 text-center SecundaryText">Selecciona el tipo de Banda de Covers que te gustaría</h5>
          </Col>
        </Row>
        <Row className="btn-margin-2">
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="Por definir"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))
  

  .add("Layout-9", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="SecundaryText">¿De qué estilo te imaginas tu escenario ideal?</h3>
          </Col>
        </Row>
        <Row className="btn-margin">
          <Col md="12" className="text-center">
            <BotonRadius title="Clásico" />
          </Col>
          <Col md="12" className="text-center">
            <BotonRadius title="Intermedio"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonRadius title="moderno"/>
          </Col>
        </Row>
        <div className="div-bottom">
        <Row className="row-bottom">
          <Col>
            <h5 className="IntroText text-center">¡Importante! el estilo no incide el precio del escenario, solo en el estilo que se esta buscando diseñar.</h5>
          </Col>
        </Row>
        </div>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-10", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="SecundaryText">¿Cuales son tus elementos favoritos dentro de un escenario?</h3>
          </Col>
          <Col md="12">
            <h5 className="SecundaryText text-center">Selecciona tus categorias favoritas</h5>
          </Col>
        </Row>
        <Row className="btn-margin">
          <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="Pantallas" />
          </Col>
          <Col md="2">
            <BotonDisabled title="efectos"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="escenografia"/>
          </Col>
        </Row>
        <Row>
        <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="Barras Led"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="tarima"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="decoración"/>
          </Col>
        </Row>
        <Row>
        <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="laser"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="sonido"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="iluminación"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-11", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="IntroText">talento</h3>
          </Col>
          <Col md="12">
            <h5 className="SecundaryText text-center">¿Ya tienes un talento confirmado?</h5>
          </Col>
        </Row>
        <Row className="btn-margin">
            <Col md="12" className="text-center">
              <BotonRadius title="SI"/>
            </Col>
            <Col md="12" className="text-center">
              <BotonRadius title="NO"/>
            </Col>
        </Row>
        <Row>
          <Col md={{size: 5, offset:4}} className="text-center">
            <FieldText/>
          </Col>
        </Row>
          
      </Container>
    </LayoutMain>
  ))

  .add("Layout-12", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="SecundaryText">¿Cuales son tus elementos favoritos dentro de un escenario?</h3>
          </Col>
          <Col md="12">
            <h5 className="SecundaryText text-center">Selecciona tus categorias favoritas</h5>
          </Col>
        </Row>
        <Row className="btn-margin">
          <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="Pantallas" />
          </Col>
          <Col md="2">
            <BotonDisabled title="efectos"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="escenografia"/>
          </Col>
        </Row>
        <Row>
        <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="Barras Led"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="tarima"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="decoración"/>
          </Col>
        </Row>
        <Row>
        <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="laser"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="sonido"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="iluminación"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-13", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="IntroText">efectos</h2>
          </Col>
          <Col md="12">
            <h4 className="SecundaryText text-center">¿Con qué efectos te gustaría contar? </h4>
          </Col>
        </Row>
        <Row className="btn-margin">
          <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="co2" />
          </Col>
          <Col md="2">
            <BotonDisabled title="fuego frio"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="humo bajo"/>
          </Col>
        </Row>
        <Row>
        <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="pistola de co2"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="confetti"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="minas"/>
          </Col>
        </Row>
        <Row>
        <Col md={{size: 2, offset: 3}}>
            <BotonDisabled title="pistola de co2 led"/>
          </Col>
          <Col md="2">
           <BotonDisabled title="lanza llamas"/>
          </Col>
          <Col md="2">
            <BotonDisabled title="serpentina"/>
          </Col>
        </Row>
        <div className="div-bottom">
        <Row className="row-bottom-2">
          <Col>
            <h5 className="IntroText text-center">Saltar</h5>
          </Col>
        </Row>
        </div>
          
      </Container>
    </LayoutMain>
  ))

  .add("Layout-14", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="IntroText">¿Tienes alguna observación o referencia adicional?</h2>
          </Col>
          <Col md="12">
            <h4 className="SecundaryText text-center">Deja un comentario o adjunta una foto a continuación</h4>
          </Col>
        </Row>
        <Row className="btn-margin-2">
          <Col md={{size: 2, offset: 1}}>
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
        </Row>
        <div className="div-bottom">
        <Row className="row-bottom-2">
          <Col>
            <h5 className="IntroText text-center">Saltar</h5>
          </Col>
        </Row>
        </div>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-15", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="SecundaryText">¿Qué tipo de estilo fotográfico estás buscando</h2>
          </Col>
          <Col md="12">
            <h4 className="SecundaryText text-center"> Selecciona tus categorias favoritas </h4>
          </Col>
        </Row>

        <Row className="align-items-center mt1">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="social" />
            <BotonDisabled title="moda"/>
            <BotonDisabled title="periodistico"/>
            <BotonDisabled title="branding"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="artistico" />
            <BotonDisabled title="comercial"/>
            <BotonDisabled title="aereo"/>
            <BotonDisabled title="nocturno"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="documental" />
            <BotonDisabled title="publicitario"/>
            <BotonDisabled title="retrato"/>
            <BotonDisabled title="redes sociales
"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-16", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="IntroText">¿Tienes alguna observación o referencia adicional?</h2>
          </Col>
          <Col md="12">
            <h4 className="SecundaryText text-center">Deja un comentario o adjunta una foto a continuación</h4>
          </Col>
        </Row>
        <Row className="btn-margin-2">
          <Col md={{size: 2, offset: 1}}>
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
          <Col md="2">
            <LoadImg/>
          </Col>
        </Row>
        <div className="div-bottom">
        <Row className="row-bottom-2">
          <Col>
            <h5 className="IntroText text-center">Saltar</h5>
          </Col>
        </Row>
        </div>
      </Container>
    </LayoutMain>
  ))
  
  .add("Layout-17", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="SecundaryText">¿Qué tipo de estilo video estás buscando</h2>
          </Col>
          <Col md="12">
            <h4 className="SecundaryText text-center"> Selecciona tus categorias favoritas </h4>
          </Col>
        </Row>

        <Row className="align-items-center mt1">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="social" />
            <BotonDisabled title="moda"/>
            <BotonDisabled title="periodistico"/>
            <BotonDisabled title="branding"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="artistico" />
            <BotonDisabled title="comercial"/>
            <BotonDisabled title="aereo"/>
            <BotonDisabled title="nocturno"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="documental" />
            <BotonDisabled title="publicitario"/>
            <BotonDisabled title="retrato"/>
            <BotonDisabled title="redes sociales"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))
  
  .add("Layout-18", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="IntroText">¿Tienes alguna observación o referencia adicional?</h2>
          </Col>
          <Col md="12">
            <h4 className="SecundaryText text-center">Deja un comentario o adjunta una foto a continuación</h4>
          </Col>
        </Row>
        <Row className="btn-margin-2">
        <Col md={{ size: 10, offset: 2 }}>
          <Form>
              <FormGroup>
                <Row>
                  <Col md="4">
                      <Label className="mt-5 IntroText">LINK</Label>
                      <Input></Input>
                  </Col>
                  <Col md={{size: 4, offset: 1}}>
                      <Label className="mt-5 IntroText">LINK</Label>
                      <Input ></Input>
                  </Col>
                  </Row>
                  <Row>
                  <Col md="4">
                      <Label className="mt-3 IntroText">LINK</Label>
                      <Input></Input>
                  </Col>
                  <Col md={{size: 4, offset: 1}}>
                      <Label className="mt-3 IntroText">LINK</Label>
                      <Input></Input>
                  </Col>
                  </Row>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <div className="div-bottom">
        <Row className="row-bottom-2">
          <Col>
            <h5 className="IntroText text-center">Saltar</h5>
          </Col>
        </Row>
        </div>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-19", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="SecundaryText">¡Cuéntanos! ¿qué tipo de licor necesitas para tu evento?</h2>
          </Col>
          <Col md="12">
            <h5 className="SecundaryText text-center">  Selecciona las categorias que desees </h5>
          </Col>
        </Row>

        <Row className="align-items-center mt1">
          <Col md={{ size: 6, offset: 4 }}>
            <BotonDisabled title="Whisky" />
            <BotonDisabled title="ginebra"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 6, offset: 4 }}>
            <BotonDisabled title="vodka" />
            <BotonDisabled title="Champagne"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 6, offset: 4 }}>
            <BotonDisabled title="ron" />
            <BotonDisabled title="espumantes"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 6, offset: 4 }}>
            <BotonDisabled title="tequila" />
            <BotonDisabled title="vino"/>
          </Col>
        </Row>
        <div className="div-bottom-2">
        <Row className="row-bottom-2">
          <Col>
            <h5 className="IntroText text-center">¡Importante! todos los pedidos, con la excepción de las marcas nacionales, deben ser solicitados no mas de dos meses antes del evento.</h5>
          </Col>
        </Row>
        </div>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-20", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h2 className="SecundaryText">A continuación te presentamos alguna de nuestras marcas disponibles</h2>
          </Col>
        </Row>
        <Row className="align-items-center mt1">
          <Col md={{size: 4, offset: 4}}>
            <Selection/>
          </Col>
          <Col md={{size: 4, offset: 4}}>
            <Selection/>
          </Col>
          <Col md={{size: 4, offset: 4}}>
            <Selection/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-21", () =>(
    <LayoutMain>
      <Container fluid>
        <Row>
          <Col className="text-center" md="12">
            <h3 className="SecundaryText">¿Qué tipo de cocteles estas buscando?</h3>
          </Col>
        </Row>
        <Row className="btn-margin">
          <Col md="12" className="text-center">
            <BotonDisabled title="Simples"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="especiales"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="shots"/>
          </Col>
          <Col md="12" className="text-center">
            <BotonDisabled title="teteros"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))

  .add("Layout-22", () =>(
    <LayoutMain>
      <Container fluid>
      <Row className="align-items-center">
          <Col className="text-center">
            <h2 className="text-center SecundaryText">Selecciona el estilo de coctel que mas te gusta</h2>
          </Col>
        </Row>
        <Row className="align-items-center mt1">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="margarita" />
            <BotonDisabled title="piña colada"/>
            <BotonDisabled title="negroni"/>
            <BotonDisabled title="bloody mary"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="manhatan" />
            <BotonDisabled title="daiquiri"/>
            <BotonDisabled title="acapulco"/>
            <BotonDisabled title="tom collins"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="martini" />
            <BotonDisabled title="mai tai"/>
            <BotonDisabled title="mojito"/>
            <BotonDisabled title="el presidente"/>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ size: 10, offset: 2 }}>
            <BotonDisabled title="black russian" />
            <BotonDisabled title="destornillador"/>
            <BotonDisabled title="white lady"/>
            <BotonDisabled title="himlet"/>
          </Col>
        </Row>
      </Container>
    </LayoutMain>
  ))



  storiesOf("Clima", module).add("default", () => <App />);

storiesOf("App", module).add("default", () => <App />);