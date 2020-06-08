import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Row, Container, Col, Nav, NavLink, NavItem, Button } from "reactstrap";

const axios = require("axios");

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson"
  });

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:3000/api/users/profile",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((response) => response.data)
      .then((data) => setProfile(data.authData.user[0]));
  }, []);

  const { email, name, lastname } = profile;

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
            <ListGroupItem>{email}</ListGroupItem>
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
