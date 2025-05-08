//NavBar.tsx
import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import './NavBar.css'

// Creating Navbar elements for website navigation
const NavBar: React.FC = () => {

  return (
    <div className="navBar">
      <Navbar>
        <Nav >
          <Nav.Link className="navText" href="/"> Products |</Nav.Link>
          <Nav.Link className="navText" href="/cart"> Shopping Cart |</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;