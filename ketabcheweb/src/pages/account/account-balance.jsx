import React from 'react'
import { Container } from 'react-bootstrap'

const AccountBalance = () => {
  return (
    <div>
      <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Icub</Nav.Link>
            <Nav.Link href="#features">Cusumers</Nav.Link>

          </Nav>
        </Container>
    </div>
  )
}

export default AccountBalance