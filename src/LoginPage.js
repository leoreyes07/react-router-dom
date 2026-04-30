import React from "react";
import { useAuth } from "./auth";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');

  const login = (e) =>{
    e.preventDefault();
    auth.login({ username });
  };

  return (
    <>
    <h1>Login</h1>

    <form onSubmit={login}>
      <label>Username:

      <input 
        value={username} 
        onChange={e => setUsername(e.target.value)}
      />
      </label>

      <button type="submit">Login</button>
    </form>
    </>
  );
}

export { LoginPage };