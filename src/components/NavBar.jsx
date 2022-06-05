import React from 'react'
import logo from '../img/logo.png';
import CartWidget from './CartWidget';
const bgNav = { backgroundColor: '#93b7ff' };

function NavBar() {
return (
<>
<nav className="navbar navbar-expand-lg mb-4" style={bgNav}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="Logo" className="img-fluid logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Grandes Ofertas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sobre Nosotros</a>
                </li>
            </ul>
        </div>
        <CartWidget items={15}/>
    </div>
</nav>
</>
)
}

export default NavBar