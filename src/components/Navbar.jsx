import React from "react";

function Navbar({ username, handleLogout }) {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="navbar-title">
          <h2>🎓 SmartScholar</h2>

          <span>
            Sistem Pakar Penilaian Kelayakan Beasiswa
          </span>
        </div>

      </div>

      <div className="navbar-right">

        <div className="user-info">

          <div className="avatar">
            👤
          </div>

          <div>
            <strong>{username || "Administrator"}</strong>

            <p>Admin</p>
          </div>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;