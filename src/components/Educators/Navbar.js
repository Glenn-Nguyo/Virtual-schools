import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <>
        <Navbar className='navigation' bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">E-Masomo</Navbar.Brand>

            <Button className='btn' variant="info">Log out</Button>{' '}
            </Container>
        </Navbar>
      
    </>
  )
}

export default NavBar;
