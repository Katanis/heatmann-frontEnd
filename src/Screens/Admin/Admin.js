import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '../../Components/AuthForm/AuthForm';
import { useAuth } from '../../context/auth';

import ProjectForm from '../../Components/AddNewProjectForm/ProjectForm';

function Admin(props) {
  const { setAuthTokens } = useAuth();
  const [showProjectForm, setshowProjectForm] = useState(false);

  function logOut() {
    setAuthTokens('');
    return <Redirect to={'/login'} />;
  }
  

  return (
    <div>
      <h1>Admin Page</h1>
      <Button onClick={() => setshowProjectForm(!showProjectForm)}>
      Add new Project
      </Button>
      <div style={showProjectForm ? { display: 'block' } : { display: 'none' }}>
        <ProjectForm />
      </div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;
