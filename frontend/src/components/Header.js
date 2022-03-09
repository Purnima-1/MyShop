import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className="navbar"  expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>MyShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id = 'basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to="/cart">
            <Nav.Link><i className='fas fa-shopping-cart mx-1'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link><i className='fas fa-user mx-1'></i>Sign In</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </Container>

      </Navbar>
    </header>
  )
}
export default Header