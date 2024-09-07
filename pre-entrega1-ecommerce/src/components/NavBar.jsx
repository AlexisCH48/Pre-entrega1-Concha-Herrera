import { Alert } from "bootstrap";
import CartWidget from "./CartWidget/CartWidget"
import Button from './ButtonNav/ButtonNav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandLogo from '@/assets/LaptopBrand.svg';



const NavBar = () => {
    const handleClick = () => {
        alert('¡boton clickeado!')
    }

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="brand-logo"
                        src={BrandLogo}
                        className="d-inline-block align-top"
                    />{' '}
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button label="Celulares" onClick={handleClick}/>
                        <Button label="Tablets" onClick={handleClick}/>
                        <Button label="Notebooks" onClick={handleClick}/>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar