import React from "react";
import { useAuth } from "./auth";
import { useLocation, Navigate } from "react-router-dom";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const location = useLocation();

  const login = (e) =>{
    e.preventDefault();
    const from = location.state?.from?.pathname || '/profile';
    auth.login({ username }, from);
  };

  if (auth.user) {
    return <Navigate to='/profile' />
  }

  return (
    <div className="page-container">
      <h2>Login</h2>

      <form onSubmit={login}>
        <label>
          Username:
          <input 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter username (try 'admin' or 'leo')"
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export { LoginPage };