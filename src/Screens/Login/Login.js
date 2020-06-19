import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from '../../img/logos_Headmann-big.png';
import {
  Card,
  Logo,
  Form,
  Input,
  Button,
  Error,
} from '../../Components/AuthForm/AuthForm';
import { useAuth } from '../../context/auth';

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();
  const referer = '/admin';
  const prefix = 'http://18.189.49.66:3000/users';

  function postLogin() {
    axios
      .get(prefix + '/api/login/', {
        params: { username: userName, password: password },
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          console.log(result);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
    console.log(JSON.parse(localStorage.getItem('tokens')));
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {isError && (
        <Error>The username or password provided were incorrect!</Error>
      )}
    </Card>
  );
}

export default Login;
