import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'


const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

const dispatch = useDispatch()
const userLogin = useSelector((state)=> state.userLogin)
const { userInfo } = userLogin

const logoutHandler = () => {
  dispatch(logout())
}

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
            <Nav.Link> {cartItems.reduce((acc, item) => acc + item.qty, 0)}<i className='fas fa-shopping-cart mx-1'></i>Cart</Nav.Link>
            </LinkContainer>
{userInfo? (
<NavDropdown title = {userInfo.name} id = 'username'>
  <LinkContainer to = '/profile'>
    <NavDropdown.Item> Profile</NavDropdown.Item>
  </LinkContainer>
  <NavDropdown.Item onClick = {logoutHandler}>
    Logout
  </NavDropdown.Item>
</NavDropdown>
) : ( <LinkContainer to="/login">
<Nav.Link><i className='fas fa-user mx-1'></i>Sign In</Nav.Link>
</LinkContainer>

)}
            </Nav>
          </Navbar.Collapse>
      </Container>

      </Navbar>
    </header>
  )
}
export default Header