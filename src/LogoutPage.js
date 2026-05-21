import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div className="page-container">
      <h2>Logout</h2>

      <form onSubmit={logout}>
        <label>Are you sure you want to log out?</label>
        <button type="submit" className="secondary" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Yes, Logout</button>
      </form>
    </div>
  );
}

export { LogoutPage };