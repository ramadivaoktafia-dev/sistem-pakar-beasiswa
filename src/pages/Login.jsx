import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("username", username);

      onLogin();
    } else {
      setError("Username atau Password salah.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">

          <h1>🎓 SmartScholar</h1>

          <p>
            Sistem Pakar Penilaian Kelayakan Beasiswa
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="login-group">

            <label>👤 Username</label>

            <input
              type="text"
              placeholder="Masukkan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

          </div>

          <div className="login-group">

            <label>🔒 Password</label>

            <input
              type="password"
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Masuk ke Dashboard
          </button>

        </form>

        <div className="login-info">

          <strong>Demo Login</strong>

          <p>Username : admin</p>

          <p>Password : admin123</p>

        </div>

      </div>

    </div>
  );
}

export default Login;