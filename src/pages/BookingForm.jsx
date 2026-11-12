import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";
import { useEffect, useState } from "react";

function BookingForm() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
    if (!isLoggedIn) {
        navigate("/login", {
            state: {
                from: "/booking-form",
            },
        });
    }
}, [isLoggedIn, navigate]);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pickupLocation: "",
        pickupDate: "",
        returnDate: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const pricePerDay = 2000;

    function handleChange(event) {
        const { name, value } = event.target;

        if (name === "phone") {
            const numbersOnly = value
                .replace(/\D/g, "")
                .slice(0, 10);

            setFormData((previous) => ({
                ...previous,
                phone: numbersOnly,
            }));

            return;
        }

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
    }

    function calculateDays() {
        if (!formData.pickupDate || !formData.returnDate) {
            return 0;
        }

        const pickup = new Date(formData.pickupDate);
        const returnDate = new Date(formData.returnDate);

        const difference =
            returnDate.getTime() - pickup.getTime();

        const days = Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );

        return days > 0 ? days : 0;
    }

    const numberOfDays = calculateDays();
    const totalPrice = numberOfDays * pricePerDay;

    function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setSuccess("");

        // Login check
        if (!isLoggedIn) {
            navigate("/login", {
                state: {
                    from: "/booking-form",
                },
            });

            return;
        }

        if (!formData.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (formData.phone.length !== 10) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }

        if (!formData.pickupLocation.trim()) {
            setError("Please enter your pickup location.");
            return;
        }

        if (!formData.pickupDate) {
            setError("Please select a pickup date.");
            return;
        }

        if (!formData.returnDate) {
            setError("Please select a return date.");
            return;
        }

        if (
            new Date(formData.returnDate) <=
            new Date(formData.pickupDate)
        ) {
            setError(
                "Return date must be after the pickup date."
            );
            return;
        }

        if (numberOfDays <= 0) {
            setError("Please select valid booking dates.");
            return;
        }

        const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        const userEmail =
            localStorage.getItem("userEmail");

        const newBooking = {
            id: Date.now(),
            userEmail: userEmail,
            name: formData.name.trim(),
            phone: formData.phone,
            pickupLocation: formData.pickupLocation.trim(),
            pickupDate: formData.pickupDate,
            returnDate: formData.returnDate,
            numberOfDays,
            pricePerDay,
            totalPrice,
        };

        localStorage.setItem(
            "bookings",
            JSON.stringify([
                ...existingBookings,
                newBooking,
            ])
        );

        setSuccess(
            `Booking confirmed successfully! Total: ₹${totalPrice}`
        );

        setTimeout(() => {
            navigate("/bookings");
        }, 1500);
    }

    return (
        <main>
            <section className="booking-form-hero">
                <div className="booking-form-hero-content">
                    <span className="section-label">
                        PLAN YOUR JOURNEY
                    </span>

                    <h1>Reserve Your Ertiga</h1>

                    <p>
                        Enter your details and dates to calculate
                        your booking price.
                    </p>
                </div>
            </section>

            <section className="booking-form-section">
                <div className="booking-form-container">

                    <div className="booking-vehicle-card">
                        <div className="booking-vehicle-image">
                            <img
                                src="/images/car-img.jpg"
                                alt="Ertiga"
                            />
                        </div>

                        <div className="booking-vehicle-content">
                            <span className="section-label">
                                YOUR VEHICLE
                            </span>

                            <h2>Maruti Ertiga</h2>

                            <p>
                                Comfortable and reliable for
                                family and everyday travel.
                            </p>

                            <div className="vehicle-features">
                                <span>👥 5 Seats</span>
                                <span>⛽ Petrol</span>
                                <span>⚙️ Manual</span>
                                <span>❄️ AC</span>
                            </div>

                            <div className="vehicle-price">
                                <strong>₹2,000</strong>
                                <span>/ Day</span>
                            </div>
                        </div>
                    </div>

                    <div className="booking-form-card">

                        <div className="booking-form-heading">
                            <span className="section-label">
                                BOOKING DETAILS
                            </span>

                            <h2>Enter Your Information</h2>

                            <p>
                                Please provide the details below
                                to continue.
                            </p>
                        </div>

                        <form
                            className="form-section"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="booking-name">
                                    Full Name
                                </label>

                                <input
                                    id="booking-name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="booking-phone">
                                    Phone Number
                                </label>

                                <input
                                    id="booking-phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter 10-digit phone number"
                                    inputMode="numeric"
                                    maxLength="10"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pickup-location">
                                    Pickup Location
                                </label>

                                <input
                                    id="pickup-location"
                                    name="pickupLocation"
                                    type="text"
                                    value={formData.pickupLocation}
                                    onChange={handleChange}
                                    placeholder="Enter pickup location"
                                    required
                                />
                            </div>

                            <div className="date-input-grid">
                                <div className="form-group">
                                    <label htmlFor="pickup-date">
                                        Pickup Date
                                    </label>

                                    <input
                                        id="pickup-date"
                                        name="pickupDate"
                                        type="date"
                                        value={formData.pickupDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="return-date">
                                        Return Date
                                    </label>

                                    <input
                                        id="return-date"
                                        name="returnDate"
                                        type="date"
                                        value={formData.returnDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="booking-price-summary">
                                <div className="price-summary-row">
                                    <span>Price per day</span>
                                    <strong>₹{pricePerDay}</strong>
                                </div>

                                <div className="price-summary-row">
                                    <span>Number of days</span>
                                    <strong>
                                        {numberOfDays || 0}
                                    </strong>
                                </div>

                                <div className="price-summary-divider"></div>

                                <div className="price-summary-total">
                                    <span>Total Price</span>
                                    <strong>₹{totalPrice}</strong>
                                </div>
                            </div>

                            {error && (
                                <p className="error-message">
                                    {error}
                                </p>
                            )}

                            {success && (
                                <p className="success-message">
                                    {success}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="booking-submit-btn"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default BookingForm;