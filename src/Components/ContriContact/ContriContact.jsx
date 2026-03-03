import React, { useState } from "react";
import "./ContriContact.css";

const ContriContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        contributionType: "",
        details: "",
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
        console.log("ContriContact Submitted:", formData);
        // EmailJS integration will go here later
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
                            <option value="donations">
                                Donations (Stationary / Kits / Other)
                            </option>
                            <option value="food">Food and Nutrition</option>
                            <option value="clothing">
                                Clothing and Essentials
                            </option>
                            <option value="volunteer">
                                Volunteer Work and Skills
                            </option>
                            <option value="corporate">
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

                    <button type="submit" className="cc-contact__button">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContriContact;
