import React from 'react'
import logo from '../img/logo.png';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
const bgNav = { backgroundColor: '#93b7ff' };

function NavBar() {
return (
<>
<Navbar bg="light" expand="lg" style={bgNav}>
  <Container>
    <Navbar.Brand href="#home"><Link to='/'><Image className='logotipo' src={logo}></Image></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
        <Nav.Link><NavLink to='/categoria/electro'>Electro</NavLink></Nav.Link>
        <Nav.Link><NavLink to='/categoria/tecnologia'>Tecnología</NavLink></Nav.Link>
        <Nav.Link><NavLink to='/categoria/movilidad'>Movilidad</NavLink></Nav.Link>
      </Nav>
      <CartWidget items={15}/>
    </Navbar.Collapse>

  </Container>
</Navbar>
</>
)
}

export default NavBar