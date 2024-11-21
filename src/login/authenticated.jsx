import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

// import './authenticated.css';

export function Authenticated(props) {
  const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem('userObject')));
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'post',
      body: JSON.stringify(currentUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userObject');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/study')}>
        Study
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}