import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";

function Booking() {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const allBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    const userEmail =
        localStorage.getItem("userEmail");

    const bookings = allBookings.filter(
        (booking) => booking.userEmail === userEmail
    );

    if (!isLoggedIn) {
        return (
            <main>
                <section className="bookings-hero">
                    <div className="bookings-hero-content">
                        <span className="section-label">
                            PRIVATE AREA
                        </span>

                        <h1>My Bookings</h1>

                        <p>
                            Please login to view your booking history.
                        </p>
                    </div>
                </section>

                <section className="bookings-section">
                    <div className="bookings-container">
                        <div className="no-bookings">
                            <div className="no-bookings-icon">
                                🔐
                            </div>

                            <span className="section-label">
                                LOGIN REQUIRED
                            </span>

                            <h2>
                                Please Login First
                            </h2>

                            <p>
                                Your booking history is available
                                only after you login to your account.
                            </p>

                            <button
                                type="button"
                                className="book-now-btn"
                                onClick={() =>
                                    navigate("/login", {
                                        state: {
                                            from: "/bookings",
                                        },
                                    })
                                }
                            >
                                Login to Continue
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="bookings-hero">
                <div className="bookings-hero-content">
                    <span className="section-label">
                        YOUR RESERVATIONS
                    </span>

                    <h1>My Bookings</h1>

                    <p>
                        View and manage your Car Book reservations
                        in one place.
                    </p>
                </div>
            </section>

            <section className="bookings-section">
                <div className="bookings-container">

                    {bookings.length === 0 ? (
                        <div className="no-bookings">
                            <div className="no-bookings-icon">
                                📅
                            </div>

                            <span className="section-label">
                                NO RESERVATIONS
                            </span>

                            <h2>No Bookings Yet</h2>

                            <p>
                                You haven't made any bookings yet.
                                Start planning your next comfortable
                                journey with Car Book.
                            </p>

                            <Link
                                to="/booking-form"
                                className="book-now-btn"
                            >
                                Start a Booking
                            </Link>
                        </div>
                    ) : (
                        <div className="booking-list">

                            <div className="booking-list-header">
                                <div>
                                    <span className="section-label">
                                        YOUR RESERVATIONS
                                    </span>

                                    <h2>
                                        Booking History
                                    </h2>
                                </div>

                                <span className="booking-count">
                                    {bookings.length}{" "}
                                    {bookings.length === 1
                                        ? "Booking"
                                        : "Bookings"}
                                </span>
                            </div>

                            {bookings.map((booking, index) => (
                                <div
                                    className="booking-card"
                                    key={booking.id || index}
                                >
                                    <div className="booking-card-header">
                                        <div>
                                            <span className="booking-number">
                                                BOOKING #{index + 1}
                                            </span>

                                            <h3>Ertiga</h3>
                                        </div>

                                        <span className="booking-status">
                                            Confirmed
                                        </span>
                                    </div>

                                    <div className="booking-card-details">

                                        <div className="booking-detail">
                                            <span className="booking-detail-icon">
                                                👤
                                            </span>

                                            <div>
                                                <span>Name</span>
                                                <strong>
                                                    {booking.name}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <span className="booking-detail-icon">
                                                📞
                                            </span>

                                            <div>
                                                <span>Phone</span>
                                                <strong>
                                                    {booking.phone}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <span className="booking-detail-icon">
                                                📍
                                            </span>

                                            <div>
                                                <span>Pickup</span>
                                                <strong>
                                                    {booking.pickupLocation}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <span className="booking-detail-icon">
                                                📅
                                            </span>

                                            <div>
                                                <span>Pickup Date</span>
                                                <strong>
                                                    {booking.pickupDate}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <span className="booking-detail-icon">
                                                🔄
                                            </span>

                                            <div>
                                                <span>Return Date</span>
                                                <strong>
                                                    {booking.returnDate}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="booking-detail">
                                            <span className="booking-detail-icon">
                                                ⏱️
                                            </span>

                                            <div>
                                                <span>Duration</span>

                                                <strong>
                                                    {booking.numberOfDays}{" "}
                                                    {booking.numberOfDays === 1
                                                        ? "Day"
                                                        : "Days"}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="booking-card-footer">
                                        <div>
                                            <span>Total Amount</span>

                                            <strong>
                                                ₹{booking.totalPrice}
                                            </strong>
                                        </div>

                                        <span className="price-per-day">
                                            ₹{booking.pricePerDay}/day
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Booking;