import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

// @TODO: This is ugly, do this the right way, hacked for a second to make sure bootstrap was working
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div> </div>
            </Nav>

            <Nav>
              <Nav.Link href="/People"><p>People</p></Nav.Link>
              <Nav.Link href="/People"><p>About</p></Nav.Link>
              <Nav.Link href="/People"><p>Contact</p></Nav.Link>
              <Nav.Link href="/People"><p>Blog</p></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default NavBar;