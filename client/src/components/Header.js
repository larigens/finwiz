import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="d-flex flex-column site-container">
                {/* TODO: Make the Navbar as a HEADER react component */}
                <Navbar bg="secondary" variant="dark">
                    <Container>
                        <Link to="/">
                            <Navbar.Brand>FinWiz</Navbar.Brand>
                        </Link>
                        <Nav className="me-auto">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

