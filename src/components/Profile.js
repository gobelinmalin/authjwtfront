import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Row, Container, Col, Nav, NavLink, NavItem, Button } from "reactstrap";

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson"
  });

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("profil")));
  }, []);

  const { email } = profile;

  return (
    <Container>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
      </Nav>
      <Row>
        <Col>
          <ListGroup>
            <ListGroupItem>{email && email}</ListGroupItem>
          </ListGroup>
          <Button href="/signin" onClick={() => localStorage.setItem("token", null)}>
            Sign out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
