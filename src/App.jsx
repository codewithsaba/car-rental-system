import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";
import BookingForm from "./pages/BookingForm.jsx";
import Login from "./pages/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bookings" element={<Booking />} />
                <Route path="/booking-form" element={<BookingForm />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;