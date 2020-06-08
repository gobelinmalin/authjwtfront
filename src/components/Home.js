import React from "react";
import { Container, Nav, NavLink, NavItem } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <Nav>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/signup'>Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/profile'>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/signin'>Sign in</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
};

export default Home;
