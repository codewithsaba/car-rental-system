import { Link } from "react-router-dom";

function About() {
    return (
        <main>

            {/* =========================
                About Hero
            ========================== */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About Car Book</h1>

                    <p>
                        Your trusted choice for comfortable and reliable
                        car booking.
                    </p>
                </div>
            </section>


            {/* =========================
                About Content
            ========================== */}
            <section className="about-section">

                <h2 className="about-title">
                    About Our Car
                </h2>

                <p className="about-description">
                    Car Book provides a simple and convenient way to book
                    a comfortable Ertiga for your journey. Whether you are
                    travelling with family, friends, or for work, our car
                    is ready to make your journey comfortable and enjoyable.
                </p>

                <div className="car-details-list">

                    <div>
                        <span>🚗</span>
                        <strong>Ertiga</strong>
                    </div>

                    <div>
                        <span>👥</span>
                        <strong>5 Seats</strong>
                    </div>

                    <div>
                        <span>⛽</span>
                        <strong>Petrol</strong>
                    </div>

                    <div>
                        <span>⚙️</span>
                        <strong>Manual</strong>
                    </div>

                    <div>
                        <span>❄️</span>
                        <strong>AC</strong>
                    </div>

                    <div>
                        <span>🧳</span>
                        <strong>3 Bags</strong>
                    </div>

                </div>

            </section>


            {/* =========================
                Why Choose Us
            ========================== */}
            <section className="why-choose-section">

                <div className="why-choose-content">

                    <h2 className="why-choose-title">
                        Why Choose Car Book?
                    </h2>

                    <div className="why-choose-grid">

                        <div className="why-choose-card">
                            <div className="why-choose-icon">🚗</div>
                            <h3>Comfortable Car</h3>
                            <p>
                                Enjoy a comfortable and smooth journey
                                with our well-maintained Ertiga.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">💰</div>
                            <h3>Affordable Price</h3>
                            <p>
                                Get a reliable car at a simple and
                                affordable price of ₹2,000 per day.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">📅</div>
                            <h3>Easy Booking</h3>
                            <p>
                                Book your car easily through our simple
                                online booking form.
                            </p>
                        </div>

                        <div className="why-choose-card">
                            <div className="why-choose-icon">⭐</div>
                            <h3>Reliable Service</h3>
                            <p>
                                We focus on providing a smooth and
                                dependable booking experience.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                CTA
            ========================== */}
            <section className="about-cta">

                <h2>
                    Ready to Book Your Ride?
                </h2>

                <p>
                    Make your next journey comfortable with Car Book.
                </p>

               <Link
    to="/services"
    className="book-now-btn"
>
    Explore Services
</Link>

            </section>

        </main>
    );
}

export default About;