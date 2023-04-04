import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="d-flex flex-column mb-3">
                {/* Added the lg prop to the expand prop of the Navbar component to specify that the menu should be expanded on large screens and collapsed on smaller screens. */}
                <Navbar className='background-gradient' expand="lg">
                    <Container>
                        <Link to="/">
                            <h1 className='light fw-bold display-6 m-2'>FinWiz</h1>
                        </Link>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            {/* Added the ms-auto class to the Nav component to align the login link to the right on small screens */}
                            <Nav className="ms-auto">
                                <Link to="/reports" className="nav-link light">
                                    Reports
                                </Link>
                                <Link to="/login" className="nav-link light">
                                    Login
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

