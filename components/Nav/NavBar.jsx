import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.module.css";
import { memo } from "react";

// @TODO: This is ugly, do this the right way, hacked for a second to make sure bootstrap was working
const NavBar = memo(({ navBarArray }) => {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><p>React-Bootstrap</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div> </div>
            </Nav>

            <Nav>
              {/* <Nav.Link href="/People"><navText>About</navText></Nav.Link>
              <Nav.Link href="/People"><navText>Resources</navText></Nav.Link>
              <Nav.Link href="/People"><navText>Contact</navText></Nav.Link>
              <Nav.Link href="/People"><navText>Blog</navText></Nav.Link> */}
              {/* <Nav.Link href="/People"><div className={styles.navText}>Apply</div></Nav.Link> */}
              <NavLink text={5} linkDest={"/"}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
});

/**
 * 
 * @param {string} text Displayed text 
 * @param {string=} linkDest Optional. Link destination
 * @param {bool=} disabled Optional. If true, the link is disabled.
 * @returns a NavLink component 
 */
const NavLink = ({ text, linkDest, disabled }) => {
  // Check for invalid text string 
  if (!text || typeof text != "string" || !String.length(text)) {
    console.error("[NavLink] Error: text must be a valid string");
    return null;
  }
  // Check for disabled link
  if (disabled) {
    linkDest = "";
  } else {
    linkDest = linkDest || "";
  }
  return (
    <Nav.Link href={linkDest}>
      <div className={styles.navText}>{text}</div>
    </Nav.Link> 
  );
};

const NavDropDown = () => {

};

const NavLogo = () => {

};

export default NavBar;