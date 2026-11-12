import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { loginUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    function handleLogin(event) {
        event.preventDefault();

        setError("");

        const enteredEmail = email.trim().toLowerCase();

        if (
            enteredEmail === "admin@gmail.com" &&
            password === "123456"
        ) {
            loginUser(enteredEmail);

            // Agar user booking ke liye login page par aaya tha
            if (location.state?.from === "/booking-form") {
                navigate("/booking-form");
            } else {
                navigate("/");
            }
        } else {
            setError(
                "Invalid email or password. Please try again."
            );
        }
    }

    return (
        <main className="login-page">
            <section className="login-section">
                <div className="login-container">

                    <div className="login-info-panel">
                        <span className="section-label">
                            WELCOME TO CAR BOOK
                        </span>

                        <h1>
                            Your journey starts with a simple login.
                        </h1>

                        <p>
                            Sign in to manage your bookings and
                            keep your travel plans organized.
                        </p>

                        <div className="login-features">
                            <div className="login-feature">
                                <span>🚗</span>
                                <div>
                                    <strong>Comfortable Ride</strong>
                                    <p>
                                        Travel in our spacious Ertiga.
                                    </p>
                                </div>
                            </div>

                            <div className="login-feature">
                                <span>📅</span>
                                <div>
                                    <strong>Easy Booking</strong>
                                    <p>
                                        Manage your reservations easily.
                                    </p>
                                </div>
                            </div>

                            <div className="login-feature">
                                <span>⭐</span>
                                <div>
                                    <strong>Reliable Service</strong>
                                    <p>
                                        Simple and dependable experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="login-form-wrapper">
                        <form
                            className="login-form"
                            onSubmit={handleLogin}
                        >
                            <div className="login-form-heading">
                                <span className="section-label">
                                    ACCOUNT LOGIN
                                </span>

                                <h2>Welcome Back</h2>

                                <p>
                                    Enter your details to continue.
                                </p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>

                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            {error && (
                                <p className="error-message">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="login-submit-btn"
                            >
                                Login
                            </button>

                            <div className="demo-login">
                                <span>Demo Login</span>

                                <p>
                                    Email:{" "}
                                    <strong>admin@gmail.com</strong>
                                </p>

                                <p>
                                    Password:{" "}
                                    <strong>123456</strong>
                                </p>
                            </div>

                            <Link
                                to="/"
                                className="login-back"
                            >
                                ← Back to Home
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;