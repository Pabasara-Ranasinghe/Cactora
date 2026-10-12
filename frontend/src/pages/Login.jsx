
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const successMessage = location.state?.message;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      setLoading(true);

      const response = await authService.login({
        email: email.trim(),
        password,
      });

      // Store the authentication token for future API requests.
      localStorage.setItem("cactoraToken", response.token);

      // Store basic user information for the current session.
      localStorage.setItem(
        "cactoraUser",
        JSON.stringify({
          userId: response.userId,
          fullName: response.fullName,
          email: response.email,
          role: response.role,
        })
      );

      navigate("/", { replace: true });
    } catch (err) {
      const message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.response?.data?.title ||
        "Login failed. Please check your email and password.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-heading">
          <span className="auth-icon">🌵</span>

          <h1>Welcome back!</h1>

          <p>
            Log in to explore cacti, save your favorites,
            and join the Cactora community.
          </p>
        </div>

        {successMessage && (
          <p className="auth-success" role="status">
            {successMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="login-email">Email address</label>

          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            maxLength={150}
            required
          />

          <label htmlFor="login-password">Password</label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">Create an account</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;