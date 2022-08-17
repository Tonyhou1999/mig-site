import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "./NavBar.module.css";
import { memo } from "react";

const NavBar = memo(
  ({
    navBarArray = [{ text: "people", text: "people2" }],
    navBarStyle,
    endAlign,
  }) => {
  navBarStyle = navBarStyle || "defaultNavBarStyle";


  return (
    <body style={{"height": "20000px"}}>
      <Navbar bg="light" expand="lg" className="navbar fixed-top navbar-expand-sm navbar-light">
        <div className="container">
        <Navbar.Brand href="#">
          MIG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="n-navbar-nav" />
        <Navbar.Collapse id="n-navbar-nav">
          <Nav className="ms-auto">
            <NavLink text={"About"} />
            <NavLink text={"Contact"} />

          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    </body>

);


});

const NavElements = ({ navBarArray }) => {
  return navBarArray.map((element) => {
    const {
      disabled = false,
      linkDest = null,
      isDropDown = false,
      dropDownMembers = null,
      text,
    } = element;

    return isDropDown && dropDownMembers ? 
      null :
        <NavLink text={text} 
          disabled={disabled}
          linkDest={linkDest}
        />;
  });
};

/**
 * 
 * @param {string} text Displayed text 
 * @param {string=} linkDest Optional. Link destination
 * @param {bool=} disabled Optional. If true, the link is disabled.
 * @returns a NavLink component 
 */
const NavLink = ({ text, linkDest, disabled }) => {
  // Check for invalid text string 
  if (!text || typeof text != "string" || text.length == 0) {
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
    <Nav.Item>
      <Nav.Link ahref={linkDest} className={styles.navlinkText}> {text} </Nav.Link>
    </Nav.Item>
  );
};

const NavDropDown = () => {

};


export default NavBar;