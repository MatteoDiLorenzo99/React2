import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent({ onSelectGenre }) { // Aggiungi onSelectGenre come prop
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Modifica del titolo */}
        <Navbar.Brand href="#home">EPILIBRARY</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Aggiungi un link Home */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            {/* Modifica del dropdown */}
            <NavDropdown title="Scegli il genere" id="basic-nav-dropdown" onSelect={onSelectGenre}>
              <NavDropdown.Item eventKey="fantasy">Fantasy</NavDropdown.Item>
              <NavDropdown.Item eventKey="scifi">Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item eventKey="horror">Horror</NavDropdown.Item>
              <NavDropdown.Item eventKey="romance">Romance</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Aggiunta dell'immagine di un orso polare */}
          <Nav className="ms-auto">
            <Nav.Link href="#bear">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Polar_Bear_Icon.svg"
                alt="Orso Polare"
                style={{ height: '30px' }} // Imposta la dimensione dell'immagine
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
