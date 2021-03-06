import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import CartWidget from './Cart/CartWidget';

const bgNav = { backgroundColor: '#93b7ff' };

export default function NavBar() {
return (
<>
<Navbar bg="light" expand="lg" style={bgNav}>
  <Container>
    <Navbar.Brand><Link to='/'><Image className='logotipo' src={logo}></Image></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className={'me-4'} to='/'>Home</NavLink>
        <NavLink className={'me-4'} to='/categoria/electro'>Electro</NavLink>
        <NavLink className={'me-4'} to='/categoria/tecnologia'>Tecnología</NavLink>
        <NavLink className={'me-4'} to='/categoria/movilidad'>Movilidad</NavLink>
      </Nav>
      
    </Navbar.Collapse>
    <CartWidget items={15}/>
  </Container>
</Navbar>
</>
)
}