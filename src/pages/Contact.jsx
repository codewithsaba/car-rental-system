import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        setSuccess("");
        setError("");

        if (!formData.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            setError("Please enter your email.");
            return;
        }

        if (!formData.message.trim()) {
            setError("Please enter your message.");
            return;
        }

        const existingFeedbacks =
            JSON.parse(localStorage.getItem("feedbacks")) || [];

        const newFeedback = {
            id: Date.now(),
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
        };

        localStorage.setItem(
            "feedbacks",
            JSON.stringify([...existingFeedbacks, newFeedback])
        );

        setFormData({
            name: "",
            email: "",
            message: "",
        });

        setSuccess(
            "Thank you! Your message has been submitted successfully."
        );

        setTimeout(() => {
            setSuccess("");
        }, 4000);
    }

    return (
        <main>

            {/* Contact Hero */}
            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="section-label">
                        GET IN TOUCH
                    </span>

                    <h1>Contact Us</h1>

                    <p>
                        Have a question about your booking or need
                        some help? We are here to assist you.
                    </p>

                </div>

            </section>


            {/* Contact Section */}
            <section className="contact-section">

                <div className="contact-container">

                    {/* Contact Information */}
                    <div className="contact-info">

                        <span className="section-label">
                            CONTACT INFORMATION
                        </span>

                        <h2>
                            We would love to hear from you.
                        </h2>

                        <p className="contact-info-description">
                            Whether you have a question, need help
                            with your booking, or simply want to
                            share your feedback, feel free to contact us.
                        </p>


                        <div className="contact-info-list">

                            <div className="contact-info-item">

                                <div className="contact-info-icon">
                                    📧
                                </div>

                                <div>
                                    <span>Email</span>
                                    <strong>
                                        support@carbook.com
                                    </strong>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-info-icon">
                                    📞
                                </div>

                                <div>
                                    <span>Phone</span>
                                    <strong>
                                        +91 98765 43210
                                    </strong>
                                </div>

                            </div>


                            <div className="contact-info-item">

                                <div className="contact-info-icon">
                                    📍
                                </div>

                                <div>
                                    <span>Location</span>
                                    <strong>
                                        Bhopal, Madhya Pradesh
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="contact-message">

                        <span className="section-label">
                            SEND A MESSAGE
                        </span>

                        <h2>
                            How can we help?
                        </h2>

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="form-group">

                                <label htmlFor="name">
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="message">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    rows="5"
                                    required
                                />

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
                                className="primary-btn contact-submit-btn"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;