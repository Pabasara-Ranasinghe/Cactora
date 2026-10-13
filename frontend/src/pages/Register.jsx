import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const password = formData.password;

    // Validate full name.
    if (!fullName) {
      setError("Please enter your full name.");
      return;
    }

    if (fullName.length < 2) {
      setError("Full name must contain at least 2 characters.");
      return;
    }

    // Validate email.
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password.
    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password.length > 72) {
      setError("Password must not exceed 72 characters.");
      return;
    }

    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await authService.register({
        fullName,
        email,
        password,
      });

      navigate("/login", {
        state: {
          message: "Account created successfully! Please log in.",
        },
      });
    } catch (err) {
      const message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.response?.data?.title ||
        "Registration failed. Please try again.";

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

          <h1>Create your account</h1>

          <p>
            Join the Cactora community and explore the world of cacti.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="fullName">Full name</label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            minLength={2}
            maxLength={100}
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email address</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            maxLength={150}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            maxLength={72}
            autoComplete="new-password"
            required
          />

          <label htmlFor="confirmPassword">Confirm password</label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);

              if (error) {
                setError("");
              }
            }}
            maxLength={72}
            autoComplete="new-password"
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
            aria-busy={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
