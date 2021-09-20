import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function NavBar() {
  const { user, login, logout } = useContext(UserContext);
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          {user ? <h2>Hi {user.name}</h2> : <h2>Welcome!</h2>}
        </span>
        {user ? (
          <button className="btn btn-primary" onClick={logout}>
            Log Out
          </button>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
