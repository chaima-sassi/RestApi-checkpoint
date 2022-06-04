import React from 'react'
import {Nav,NavDropdown,Container,Navbar,Form,FormControl,Button} from 'react-bootstrap'
import {Link}from 'react-router-dom'

function AppNavbar() {
  return (
    <div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Contact List</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <Link to={"/"}><Nav.Link href="#action1">Home</Nav.Link></Link>
        <Nav.Link > <Link to="/adduser" style={{color: 'rgba(0,0,0,.55)'}}>add user </Link></Nav.Link>

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default AppNavbar
