import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <header>
                <Navbar expand="lg" className="p-2">
                    <Container fluid>
                        <Navbar.Brand className="fw-semibold gradient-text heading-font fs-3" href="/"> FinWiz </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="me-auto mb-2 mb-lg-0">
                                <Nav.Link className="nav-link dark-accent gradient-hv mt-2 fs-5 fw-semibold" href="/" >Home</Nav.Link>
                                {/* TODO: Make reports as dropdown */}
                                <Nav.Link className="nav-link dark-accent gradient-hv mt-2 fs-5 fw-semibold" href="/" >Reports</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto mb-2 mb-lg-0 justify-content-end">
                                <Nav.Link className="nav-link dark-accent gradient-hv mt-2 fs-5 fw-semibold" href="/" >Login </Nav.Link>
                                {/* TODO: if logged in, display this: */}
                                <Nav.Link className="nav-link dark-accent gradient-hv mt-2 fs-5 fw-semibold" href="/">Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

