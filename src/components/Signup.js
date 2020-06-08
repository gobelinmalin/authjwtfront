import React, { useState } from "react";

import { Button, Form, Input, Label, Row, Container, Col, Nav, NavLink, NavItem } from "reactstrap";

const axios = require("axios");

const Signup = ({ history }) => {
  const [signup, setSignup] = useState({
    email: "test@test.com",
    password: "****"
  });

  const { email, password } = signup;
  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/users", {
        email: email,
        password: password
      })
      .then((res) => history.push("/sigin"));
  };

  return (
    <Container>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signin">Sign in</NavLink>
        </NavItem>
      </Nav>
      <Row>
        <Col>
          <Form>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={(event) => setSignup({ ...signup, [event.target.name]: event.target.value })}
            />
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              onChange={(event) => setSignup({ ...signup, [event.target.name]: event.target.value })}
            />
            <Button color="secondary" onClick={handleSubmit}>
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
