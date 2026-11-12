import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img
                            src="/images/car-svgrepo-com.svg"
                            alt="Car Book"
                        />
                        <span>Car Book</span>
                    </Link>

                    <p>
                        Comfortable rides, simple booking and reliable
                        service for your next journey.
                    </p>

                    <div className="footer-price">
                        <strong>₹2,000</strong>
                        <span>/ Day</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Booking */}
                <div className="footer-column">
                    <h3>Booking</h3>

                    <Link to="/booking-form">
                        Reserve Your Ride
                    </Link>

                    <Link to="/bookings">
                        My Bookings
                    </Link>

                    <Link to="/login">
                        Login
                    </Link>
                </div>

                {/* Contact */}
                <div className="footer-column footer-contact">
                    <h3>Contact</h3>

                    <p>📧 support@carbook.com</p>
                    <p>📞 +91 98765 43210</p>
                    <p>📍 Bhopal, Madhya Pradesh</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>
                        © {new Date().getFullYear()} Car Book. All rights reserved.
                    </p>

                    <p>
                        Comfortable journeys. Simple bookings.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;