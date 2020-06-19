import React from "react";
import { Link } from 'react-router-dom';
import logoImg from "../../img/logos_Headmann-big.png";
import { Card, Logo, Form, Input, Button } from '../../Components/AuthForm/AuthForm';

function Signup() {
  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="password again" />
        <Button>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;