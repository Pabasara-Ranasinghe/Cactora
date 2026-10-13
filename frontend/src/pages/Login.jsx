import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
const navigate = useNavigate();
const location = useLocation();
const { login } = useAuth();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const successMessage = location.state?.message;

const handleSubmit = async (event) => {
event.preventDefault();
setError("");

```
const trimmedEmail = email.trim();

if (!trimmedEmail) {
  setError("Please enter your email address.");
  return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
  setError("Please enter a valid email address.");
  return;
}

if (!password) {
  setError("Please enter your password.");
  return;
}

try {
  setLoading(true);

  const response = await authService.login({
    email: trimmedEmail,
    password,
  });

  login(
    {
      userId: response.userId,
      fullName: response.fullName,
      email: response.email,
      role: response.role,
    },
    response.token
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
```

};

return ( <main className="auth-page"> <section className="auth-card"> <div className="auth-heading"> <span className="auth-icon">🌵</span>

```
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

      <div className="password-input-wrapper">
        <input
          id="login-password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() =>
            setShowPassword((previous) => !previous)
          }
          aria-label={showPassword ? "Hide password" : "Show password"}
          title={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p className="auth-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="auth-submit"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? (
          <span className="login-loading">
            <span className="login-spinner" aria-hidden="true" />
            Logging in...
          </span>
        ) : (
          "Log in"
        )}
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
