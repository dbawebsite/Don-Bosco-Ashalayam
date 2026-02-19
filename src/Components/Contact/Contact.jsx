import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // EmailJS integration will go here later
    };

    return (
        <section className="db-contact" id="contact">
            <div className="db-contact__container">
                <div className="db-contact__header">
                    <h2 className="db-contact__title">Contact Us</h2>
                    <p className="db-contact__subtitle">
                        We'd love to hear from you. Please fill out the form
                        below.
                    </p>
                </div>

                <form className="db-contact__form" onSubmit={handleSubmit}>
                    <div className="db-contact__row">
                        <div className="db-contact__field">
                            <label className="db-contact__label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="db-contact__input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="db-contact__field">
                            <label className="db-contact__label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="db-contact__input"
                                placeholder="johndoe@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="db-contact__field">
                        <label className="db-contact__label">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            className="db-contact__input"
                            placeholder="0123456789"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="db-contact__field">
                        <label className="db-contact__label">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            className="db-contact__textarea"
                            placeholder="Let us know what's on your mind!"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="db-contact__button">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
