import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContriContact.css";

const ContriContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        contributionType: "",
        details: "",
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
        const templateId = import.meta.env
            .VITE_EMAILJS_TEMPLATE_CONTRIBUTION_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            contribution_type: formData.contributionType,
            contribution_details: formData.details,
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
                text: "Thanks, Contribution Enquiry sent!",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                contributionType: "",
                details: "",
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatusMsg({
                type: "error",
                text: "Could not send enquiry. Please try again later.",
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="cc-contact" id="contribute-contact">
            <div className="cc-contact__container">
                <div className="cc-contact__header">
                    <h2 className="cc-contact__title">Contribute</h2>
                    <p className="cc-contact__subtitle">
                        Tell us how you'd like to contribute. Complete the form
                        below and we'll coordinate next steps.
                    </p>
                </div>

                <form className="cc-contact__form" onSubmit={handleSubmit}>
                    <div className="cc-contact__row">
                        <div className="cc-contact__field">
                            <label
                                className="cc-contact__label"
                                htmlFor="cc-name"
                            >
                                Name
                            </label>
                            <input
                                id="cc-name"
                                type="text"
                                name="name"
                                className="cc-contact__input"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="cc-contact__field">
                            <label
                                className="cc-contact__label"
                                htmlFor="cc-email"
                            >
                                Email
                            </label>
                            <input
                                id="cc-email"
                                type="email"
                                name="email"
                                className="cc-contact__input"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="cc-contact__field">
                        <label className="cc-contact__label" htmlFor="cc-phone">
                            Phone
                        </label>
                        <input
                            id="cc-phone"
                            type="tel"
                            name="phone"
                            className="cc-contact__input"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="cc-contact__field">
                        <label
                            className="cc-contact__label"
                            htmlFor="cc-contribution"
                        >
                            Contribution Type
                        </label>
                        <select
                            id="cc-contribution"
                            name="contributionType"
                            className="cc-contact__select"
                            value={formData.contributionType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select contribution type</option>
                            <option value="Donations">
                                Donations (Stationary / Kits / Other)
                            </option>
                            <option value="Food">Food and Nutrition</option>
                            <option value="Clothing">
                                Clothing and Essentials
                            </option>
                            <option value="Volunteer">
                                Volunteer Work and Skills
                            </option>
                            <option value="Corporate">
                                Corporate / Group Collaborations
                            </option>
                        </select>
                    </div>

                    <div className="cc-contact__field">
                        <label
                            className="cc-contact__label"
                            htmlFor="cc-details"
                        >
                            Additional Details
                        </label>
                        <textarea
                            id="cc-details"
                            name="details"
                            rows="5"
                            className="cc-contact__textarea"
                            placeholder="Please tell us a little more (timing, quantity, skills, group size, etc.)"
                            value={formData.details}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="cc-contact__button"
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

export default ContriContact;
