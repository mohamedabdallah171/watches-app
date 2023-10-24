import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fnav ">
      <Container className="finav">
        <div>
          <Navbar.Brand href="#Home">
            <img src="img\logo\logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div>
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Home">About</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Home">action</NavDropdown.Item>
                <NavDropdown.Item href="#Home">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Home">Something else</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Home">Privacy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavBar;
