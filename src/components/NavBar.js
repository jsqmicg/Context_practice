import React, { useState } from "react";

function NavBar() {
  const [user, setUser] = useState("Juancho");
  const handleLogOut = (e) => {
    e.preventDefault();
    setUser(null);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    setUser("Juancho");
  };

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          {user ? <h2>Hi {user}</h2> : <h2>Welcome!</h2>}
        </span>
        {user ? (
          <button className="btn btn-primary" onClick={handleLogOut}>
            Log Out
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
