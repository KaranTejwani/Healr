// src/components/Navbar.jsx
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          <span style={{ color: "#f90" }}>HEA</span>
          <span style={{ color: "#0033cc" }}>LR</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link href="#" className="nav-underline">
              Doctors
            </Nav.Link>
            <Nav.Link href="#" className="nav-underline">
              Hospitals
            </Nav.Link>
            <Nav.Link href="#" className="nav-underline">
              Medical Conditions
            </Nav.Link>
            <Nav.Link href="#" className="nav-underline">
              About
            </Nav.Link>
          </Nav>
          <div class="ms-lg-auto ms-3">
            <a class="btn btn-light text-black mx-2" href="/login">
              <i class="fas fa-user"></i> Log in
            </a>
            <a class="btn btn-dark text-white" href="/signup">
              Sign up
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
