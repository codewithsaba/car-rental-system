import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="main">

            {/* =========================
                Hero Section
            ========================== */}
            <section className="main-section">

                <div className="left-section">

                    <p className="hero-tag">
                        Comfortable • Reliable • Easy
                    </p>

                    <h1 className="hero-title">
                        Your Journey,
                        <br />
                        Our <span>Ride.</span>
                    </h1>

                    <p className="hero-description">
                        Book our comfortable Ertiga for your next
                        journey. Simple booking, reliable service and
                        an affordable price of ₹2,000 per day.
                    </p>

                    <div className="hero-actions">

                        <Link
                            to="/booking-form"
                            className="book-now-btn"
                        >
                            Book Your Ride
                        </Link>

                        <Link
                            to="/services"
                            className="secondary-btn"
                        >
                            Explore Services
                        </Link>

                    </div>

                </div>


                <div className="right-section">

                    <div className="car-image-wrapper">

                        <div className="car-price-badge">
                            <strong>₹2,000</strong>
                            <span>/ Day</span>
                        </div>

                        <img
                            src="/images/car-img.jpg"
                            alt="Ertiga Car"
                            className="booking-car-image"
                        />

                    </div>

                </div>

            </section>


            {/* =========================
                Quick Features
            ========================== */}
            <section className="quick-features">

                <div className="quick-feature">
                    <div className="quick-feature-icon">
                        🚗
                    </div>

                    <div>
                        <h3>Comfortable</h3>
                        <p>Enjoy a smooth journey</p>
                    </div>
                </div>


                <div className="quick-feature">
                    <div className="quick-feature-icon">
                        💰
                    </div>

                    <div>
                        <h3>Affordable</h3>
                        <p>₹2,000 per day</p>
                    </div>
                </div>


                <div className="quick-feature">
                    <div className="quick-feature-icon">
                        📅
                    </div>

                    <div>
                        <h3>Easy Booking</h3>
                        <p>Book in a few steps</p>
                    </div>
                </div>


                <div className="quick-feature">
                    <div className="quick-feature-icon">
                        ⭐
                    </div>

                    <div>
                        <h3>Reliable</h3>
                        <p>Service you can trust</p>
                    </div>
                </div>

            </section>


            {/* =========================
                Booking Information
            ========================== */}
            <section className="booking-section">

                <div className="booking-content">

                    <span className="section-label">
                        YOUR NEXT JOURNEY
                    </span>

                    <h2 className="booking-title">
                        Travel comfortably with Car Book
                    </h2>

                    <p className="booking-description">
                        One reliable Ertiga. One simple booking experience.
                    </p>

                    <p className="booking-details">
                        Whether you are travelling with family, going on
                        a business trip, or simply need a comfortable car
                        for your journey, our Ertiga is ready to make your
                        travel easier and more enjoyable.
                    </p>

                </div>

            </section>


            {/* =========================
                Car Details
            ========================== */}
            <section className="about-section">

                <span className="section-label">
                    OUR VEHICLE
                </span>

                <h2 className="about-title">
                    Meet the Ertiga
                </h2>

                <p className="about-description">
                    A comfortable and practical car designed for
                    everyday journeys and family travel.
                </p>


                <ul className="car-details-list">

                    <li>
                        <span>🚗</span>
                        <span>Ertiga</span>
                    </li>

                    <li>
                        <span>👥</span>
                        <span>5 Seats</span>
                    </li>

                    <li>
                        <span>⛽</span>
                        <span>Petrol</span>
                    </li>

                    <li>
                        <span>⚙️</span>
                        <span>Manual</span>
                    </li>

                    <li>
                        <span>❄️</span>
                        <span>AC</span>
                    </li>

                    <li>
                        <span>🧳</span>
                        <span>3 Bags</span>
                    </li>

                </ul>


                <div className="booking-price">
                    ₹2,000 <span>/ Day</span>
                </div>

            </section>


            {/* =========================
                Final CTA
            ========================== */}
            <section className="home-cta">

                <div>

                    <span className="section-label">
                        READY WHEN YOU ARE
                    </span>

                    <h2>
                        Your comfortable journey starts here.
                    </h2>

                    <p>
                        Check the booking details and plan your next ride.
                    </p>

                </div>

                <Link
                    to="/booking-form"
                    className="book-now-btn"
                >
                    Start Booking
                </Link>

            </section>

        </main>
    );
}

export default Home;