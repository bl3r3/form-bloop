import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import {FaBehance, FaInstagram} from 'react-icons/fa'
  import './index.css';

  import Logo from '../../img/Avila-Preferente.png';

  export default class Navigations extends React.Component {
      constructor(props) {
          super(props);

          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false,
            prevScrollpos: window.pageYOffset
          };

          

      }

      toggle() {
          this.setState({
              isOpen: !this.state.isOpen
          });
      }

      render (){
          return (
                  <Navbar color="light" light expand="md" className="navbar">
                    <NavbarBrand href="/"> <img src={Logo} className="logo" /> </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/componets">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/componets">SOBRE AVILA</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/componets">PROYECTOS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/componets">CONTACTO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/componets"> <FaBehance className="icons-nav"/> </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/componets"> <FaInstagram className="icons-nav"/> </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                  </Navbar>
          )
      }

  }