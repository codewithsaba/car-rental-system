import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";

function Header() {
    const { isLoggedIn, logoutUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    function closeMenu() {
        setMenuOpen(false);
    }

    function handleAuthClick() {
        if (isLoggedIn) {
            logoutUser();
            navigate("/");
        } else {
            navigate("/login");
        }

        closeMenu();
    }

    return (
        <header className="header">

            {/* Logo */}
            <Link
                to="/"
                className="logo"
                onClick={closeMenu}
            >
                <img
                    src="/images/car-svgrepo-com.svg"
                    alt="Car Book"
                    className="car-logo"
                />

                <span className="logo-text">
                    Car Book
                </span>
            </Link>


            {/* Navigation */}
            <nav
                className={`nav ${
                    menuOpen ? "mobile-nav-open" : ""
                }`}
            >

                <Link
                    to="/"
                    className="nav-link"
                    onClick={closeMenu}
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className="nav-link"
                    onClick={closeMenu}
                >
                    About
                </Link>

                <Link
                    to="/services"
                    className="nav-link"
                    onClick={closeMenu}
                >
                    Services
                </Link>

                <Link
                    to="/contact"
                    className="nav-link"
                    onClick={closeMenu}
                >
                    Contact
                </Link>

                <Link
                    to="/bookings"
                    className="nav-link"
                    onClick={closeMenu}
                >
                    My Bookings
                </Link>


                {/* Mobile Login / Logout */}
                <button
                    type="button"
                    className="mobile-auth-btn"
                    onClick={handleAuthClick}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>

            </nav>


            {/* Right Side */}
            <div className="header-right">

                {/* Desktop Login / Logout */}
                <button
                    type="button"
                    className="login-btn"
                    onClick={handleAuthClick}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>


                {/* Mobile Hamburger */}
                <button
                    type="button"
                    className="menu-icon-btn"
                    onClick={() =>
                        setMenuOpen((previous) => !previous)
                    }
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >

                    {menuOpen ? (
                        <svg
                            className="menu-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line
                                x1="6"
                                y1="6"
                                x2="18"
                                y2="18"
                            />

                            <line
                                x1="18"
                                y1="6"
                                x2="6"
                                y2="18"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="menu-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line
                                x1="4"
                                y1="6"
                                x2="20"
                                y2="6"
                            />

                            <line
                                x1="4"
                                y1="12"
                                x2="20"
                                y2="12"
                            />

                            <line
                                x1="4"
                                y1="18"
                                x2="20"
                                y2="18"
                            />
                        </svg>
                    )}

                </button>

            </div>

        </header>
    );
}

export default Header;