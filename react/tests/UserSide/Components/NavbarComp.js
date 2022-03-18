import { Home } from '@mui/icons-material';
import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
    Navigate
} from 'react-router-dom';

import Cart from './Cart';
import MyOrder from './MyOrder';
import PersonList from './PersonList';

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
      <div>
          <Navbar bg="dark" variant='dark' expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">FROZEN CUP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/Cart"}>Cart</Nav.Link>
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link as={Link} to={"/MyOrder"}>
          My Order
        </Nav.Link>
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Button variant="outline-success">Logout</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      <div>
      <Routes>
          <Route exact path="" element={<Navigate to="/Home"/>}></Route>
          <Route exact path="/MyOrder" element={< MyOrder />}>
            {/* <MyOrder></MyOrder> */}
          </Route>
          <Route exact path="/Home" element={< PersonList />}>
            {/* <Home></Home> */}
          </Route>
          <Route exact path="/Cart" element={< Cart />}>
            {/* <Cart></Cart> */}
          </Route>
        </Routes>
      </div>
      </Router>
    )
  }
}
