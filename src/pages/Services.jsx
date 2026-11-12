import { Link } from "react-router-dom";

function Services() {
    return (
        <main>

            {/* Services Hero */}
            <section className="services-hero">
                <div className="services-hero-content">
                    <span className="section-label">WHAT WE OFFER</span>

                    <h1>Our Services</h1>

                    <p>
                        Simple, comfortable and reliable services
                        designed to make your journey easier.
                    </p>
                </div>
            </section>


            {/* Services */}
            <section className="services">

                <span className="section-label">
                    OUR SERVICES
                </span>

                <h2 className="services-title">
                    Everything You Need for a Better Journey
                </h2>

                <p className="services-description">
                    Car Book keeps the booking experience simple while
                    giving you a comfortable and reliable vehicle for
                    your travel needs.
                </p>


                <div className="services-list">

                    <div className="service-card">
                        <div className="service-icon">
                            🚗
                        </div>

                        <h3>Comfortable Car</h3>

                        <p>
                            Travel comfortably in our spacious and
                            well-maintained Ertiga.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">
                            📅
                        </div>

                        <h3>Easy Booking</h3>

                        <p>
                            Enter your details, select your dates and
                            complete your booking in just a few steps.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">
                            💰
                        </div>

                        <h3>Affordable Pricing</h3>

                        <p>
                            Enjoy a simple and transparent price of
                            ₹2,000 per day.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">
                            🧳
                        </div>

                        <h3>Family Friendly</h3>

                        <p>
                            With comfortable seating and luggage space,
                            the Ertiga is ideal for family trips.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">
                            ❄️
                        </div>

                        <h3>Air Conditioning</h3>

                        <p>
                            Stay comfortable throughout your journey
                            with air conditioning.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">
                            ⭐
                        </div>

                        <h3>Reliable Experience</h3>

                        <p>
                            We focus on making your car booking
                            experience simple and dependable.
                        </p>
                    </div>

                </div>

            </section>


            {/* How It Works */}
            <section className="how-it-works">

                <span className="section-label">
                    SIMPLE PROCESS
                </span>

                <h2>
                    How It Works
                </h2>

                <p className="how-it-works-description">
                    Getting your ride ready is quick and easy.
                </p>


                <div className="steps-grid">

                    <div className="step-card">

                        <div className="step-number">
                            01
                        </div>

                        <h3>Enter Your Details</h3>

                        <p>
                            Provide your name, phone number and
                            pickup location.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">
                            02
                        </div>

                        <h3>Select Your Dates</h3>

                        <p>
                            Choose your pickup and return dates
                            according to your journey.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">
                            03
                        </div>

                        <h3>Confirm Booking</h3>

                        <p>
                            Review the total price and confirm
                            your booking.
                        </p>

                    </div>


                    <div className="step-card">

                        <div className="step-number">
                            04
                        </div>

                        <h3>Enjoy Your Journey</h3>

                        <p>
                            Your booking is saved and you are ready
                            for a comfortable ride.
                        </p>

                    </div>

                </div>

            </section>


            {/* Service CTA */}
            <section className="services-cta">

                <div>
                    <span className="section-label">
                        PLAN YOUR JOURNEY
                    </span>

                    <h2>
                        Check availability for your next trip.
                    </h2>

                    <p>
                        Choose your dates and see the estimated
                        booking price.
                    </p>
                </div>

                <Link
                    to="/booking-form"
                    className="book-now-btn"
                >
                    Check Availability
                </Link>

            </section>

        </main>
    );
}

export default Services;