import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import SHSLogo from '../assets/Logo.png';
const NavBar = () => {
    return (

        <Container >
            <Navbar collapseOnSelect expand="lg" bg="none" variant="light" data-bs-theme="white">
                <Navbar.Brand >
                    <img src={SHSLogo} alt="SHSLogo" className='SHS-Logo image-fluid' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className="ms-auto gap-3 text-sm-start text-center">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Button variant='transparent' className='border log-in-btn border-dark px-4'>Log In</Button>
                        <Button variant='none' className='fw-bold register-btn px-4'>Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>


    )
}

export default NavBar