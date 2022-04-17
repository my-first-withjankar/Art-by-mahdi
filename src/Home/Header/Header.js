import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigation = useNavigate()
    const handleSignOut = () => {
        signOut(auth)
        navigation('/')
    }
    return (
        <div>
            <Navbar className='navbar fixed-top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Artist: Mahdi Ki</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#gallery">Gallery</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='link' as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link className='link' as={Link} to="about">About Me</Nav.Link>
                            <Nav.Link className='link' as={Link} to="register">Register</Nav.Link>
                            {
                                user ?
                                    <button
                                        onClick={handleSignOut}
                                        className='btn btn-link link text-dark text-decoration-none'>Sign Out</button>
                                    :
                                    < Nav.Link className='link' as={Link} to="/login">
                                        Sign In
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;