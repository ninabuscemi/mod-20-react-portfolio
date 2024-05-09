import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/nb_logo.png'; // Assuming your logo file is named 'logo.png'

const Styles = styled.div`
  a, .navbar-nav .nav-link {
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  .active {
    background-color: black;
    color: white !important;
  }
  .navbar {
    display: flex;
    justify-content: center;
    padding-top: 10px; /* Adjust padding for spacing */
    padding-bottom: 10px; /* Adjust padding for spacing */
  }
  .navbar-brand {
    margin-right: auto; /* Push Navbar.Brand to the left */
    margin-left: 170px; /* Add some left margin to move the logo */
  }
`;


function Navigation({ currentPage, handlePageChange }) {

  return (
    <Styles>
      <Navbar bg="transparent" expand='lg'>
        <Navbar.Brand>
          <img src={logo} alt="Logo" style={{ height: '130px' }} /> {/* Add the logo image */}
        </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Container>
                    <Nav className="m-auto flex-grow-1 justify-content-evenly">
                        <Nav.Link
                            href="#aboutme" onClick={() => handlePageChange('Home')}
                            className={currentPage === 'About' ? 'active' : 'nav-link'}>
                            ABOUT
                        </Nav.Link>
                        <Nav.Link
                            href="#work" onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Project' ? 'active' : 'nav-link'}>
                            WORK
                        </Nav.Link>
                        <Nav.Link
                            href="#resume" onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'active' : 'nav-link'}>
                            RESUME
                        </Nav.Link>
                        <Nav.Link
                            href="#contact" onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'active' : 'nav-link'}>
                            CONTACT
                        </Nav.Link>
                    </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default Navigation;