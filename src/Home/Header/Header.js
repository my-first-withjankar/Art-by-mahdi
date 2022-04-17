import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='navbar' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Artist: Mahdi Ki</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#gallery">Gallery</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="register">Register</Nav.Link>
                            <Nav.Link as={Link} to="login">
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;