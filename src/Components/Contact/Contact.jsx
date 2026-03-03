import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [sending, setSending] = useState(false);
    const [statusMsg, setStatusMsg] = useState(null); // { type: 'success'|'error', text: string }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMsg(null);
        setSending(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            user_message: formData.message,
        };

        try {
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey,
            );
            setStatusMsg({
                type: "success",
                text: "Message Sent. Thank You!",
            });
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatusMsg({
                type: "error",
                text: "Could not send message. Please try again later.",
            });
        } finally {
            setSending(false);
        }
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
                                placeholder="Name"
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
                                placeholder="Email"
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
                            placeholder="Phone Number"
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

                    <button
                        type="submit"
                        className="db-contact__button"
                        disabled={sending}
                    >
                        {sending ? "Sending…" : "Submit"}
                    </button>

                    {statusMsg && (
                        <div
                            role="status"
                            aria-live="polite"
                            className="formstatus"
                            style={{
                                color:
                                    statusMsg.type === "success"
                                        ? "#0b7a3d"
                                        : "#8b0000",
                            }}
                        >
                            {statusMsg.text}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
