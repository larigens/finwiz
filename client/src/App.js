import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import Login from "./newPages/Login";
import Home from "./newPages/Home";
import SignUp from "./newPages/SignUp";
// import { Store } from "./Store";
// import CartScreen from "./screens/CartScreen";
// import SigninScreen from "./screens/SigninScreen";

function App() {

  // const {cart} = useContext(Store).state
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="secondary" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Name</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;