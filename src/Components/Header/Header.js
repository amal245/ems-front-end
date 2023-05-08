import React from 'react';
import { Container,Navbar } from 'react-bootstrap';

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
           <i className='fa-solid fa-users fa-flip'></i>{' '}
            EMS Appliccation
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header