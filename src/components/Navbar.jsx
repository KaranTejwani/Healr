// src/components/Navbar.jsx
import { Link } from "react-router-dom";

import { useState } from "react";
import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import fetchAllDoctors from "./fetchAllDoctors";

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">
            <span style={{ color: "#f90" }}>HEA</span>
            <span style={{ color: "#0033cc" }}>LR</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="#" className="nav-underline" onClick={async () => {
    const data = await fetchAllDoctors();
    console.log("Doctors:", data); // Replace with setDoctors(data) if managing state
  }}>
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
            <div className="ms-lg-auto ms-3">
              <Link
                to="/login"
                className="btn btn-dark text-white"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-user"></i> Log in
              </Link>
              <Link
                to="/signup"
                className="btn btn-dark text-white"
                style={{ textDecoration: "none" }}
              >
                Sign up
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
