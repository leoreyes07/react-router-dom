import React from "react";
import { useAuth } from "./auth";


function ProfilePage() {
  const auth = useAuth();


  return (
    <div className="page-container">
      <h2>Profile</h2>
      <p>Welcome, <strong>{auth.user.username}</strong>!</p>
      {auth.user.isAdmin && <p style={{ color: 'var(--primary)' }}>You are an Administrator.</p>}
    </div>
  );
}

export { ProfilePage };