import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import styles from "./NavBar.module.css";
import { memo } from "react";
import Link from 'next/link';


const NavBar = memo(({ navBarArray = [] }) => {
  if (!navBarArray || !navBarArray.length) {
    return null;
  } 
  // TODO: add modular alignment
  // TODO: add mig logo to navbar
  return (
    <Navbar bg="white" expand="lg" className="navbar fixed-top navbar-expand-sm navbar-light">
      <div className="container">
        <Navbar.Brand href="#" className={styles.link}> {/* TODO: replace */}
          MIG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <NavElements navBarArray={navBarArray}/>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
});

const NavElements = ({ navBarArray }) => {
  return navBarArray.map((element) => {
    const {
      disabled = false,
      linkDest = "/",
      isDropDown = false,
      dropDownMembers = null,
      text,
    } = element;

    // TODO: add dropdown
    return isDropDown && dropDownMembers ? 
      null :
        <NavLink text={text} 
          disabled={disabled}
          linkDest={linkDest}
        />;
  });
};

const NavLink = ({ text, linkDest, disabled }) => {
  // Check for invalid text string 
  if (!text || typeof text != "string" || text.length == 0) {
    console.error("[NavLink] Error: text must be a valid string");
    return null;
  }
  return (disabled ? 
    <Link href={linkDest} passHref>
      <Nav.Link className={styles.link} disabled>{text}</Nav.Link>
    </Link> : 
    <Link href={linkDest} passHref>
      <Nav.Link className={styles.link}>{text}</Nav.Link>
    </Link> 
  );
};

// TODO: 
const NavDropDown = () => null;

export default NavBar;