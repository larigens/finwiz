import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Login from "./newPages/Login";
import Home from "./newPages/Home";
import SignUp from "./newPages/SignUp";

function App() {

  return (
    <BrowserRouter>
      <div className="site-container">

        <main>
          <Container className="">
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