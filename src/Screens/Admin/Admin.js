
import React from "react";
import { Redirect } from 'react-router-dom';
import { Button } from "../../Components/AuthForm/AuthForm";
import { useAuth } from "../../context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens('');
    return <Redirect to={'/login'} />;
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;