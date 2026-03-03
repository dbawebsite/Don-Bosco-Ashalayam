import React from "react";
import "./Contribute.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import DonationImage from "./../../assets/ToyDonation.webp";
import FoodImage from "./../../assets/DonationInKind.webp";
import ClothingImage from "./../../assets/ClothesDonation.webp";
import VolunteerImage from "./../../assets/VolunteerWork.webp";
import ContriContact from "../../Components/ContriContact/ContriContact";

const Contribute = () => {
    return (
        <>
            <Navbar />

            <main className="contribute-wrap" role="main">
                <header
                    className="contribute-hero"
                    aria-labelledby="contribute-hero-title"
                >
                    <h1
                        id="contribute-hero-title"
                        className="contribute-hero-title"
                    >
                        Contribute to Don Bosco Ashalayam
                    </h1>
                    <p className="contribute-hero-sub">
                        Practical ways to support children's learning, wellbeing
                        and daily needs through helpful items, meals, clothing
                        and time. Below are suggested contribution categories
                        and how they help.
                    </p>
                </header>

                <section
                    className="contribute-cards"
                    aria-label="Contribution options"
                >
                    {/* Card 1 — Text then Image */}
                    <article
                        className="contribute-card"
                        aria-labelledby="contribute-donations-title"
                    >
                        <div className="contribute-card-text">
                            <h2
                                id="contribute-donations-title"
                                className="contribute-card-title"
                            >
                                Donations In Kind
                            </h2>
                            <p className="contribute-card-paragraph">
                                Useful items make daily life and learning
                                easier; stationery, notebooks, educational aids,
                                hygiene kits, sports equipment and classroom
                                supplies. Coordinated drives from groups or
                                schools help us distribute items where they're
                                needed most.
                            </p>
                        </div>
                        <div
                            className="contribute-card-media"
                            aria-hidden="true"
                        >
                            <img
                                src={DonationImage}
                                alt="Sample: boxes of school supplies"
                                className="contribute-card-image"
                            />
                        </div>
                    </article>

                    {/* Card 2 — Image then Text */}
                    <article
                        className="contribute-card contribute-card--reverse"
                        aria-labelledby="contribute-food-title"
                    >
                        <div className="contribute-card-text">
                            <h2
                                id="contribute-food-title"
                                className="contribute-card-title"
                            >
                                Food Support
                            </h2>
                            <p className="contribute-card-paragraph">
                                Nutritious meals are essential for growth and
                                learning. Contributions of groceries, fresh
                                produce or organised meal support for special
                                days are handled responsibly and distributed for
                                the children's benefit.
                            </p>
                        </div>
                        <div
                            className="contribute-card-media"
                            aria-hidden="true"
                        >
                            <img
                                src={FoodImage}
                                alt="Sample: fresh groceries"
                                className="contribute-card-image"
                            />
                        </div>
                    </article>

                    {/* Card 3 — Text then Image */}
                    <article
                        className="contribute-card"
                        aria-labelledby="contribute-clothing-title"
                    >
                        <div className="contribute-card-text">
                            <h2
                                id="contribute-clothing-title"
                                className="contribute-card-title"
                            >
                                Clothing & Essentials
                            </h2>
                            <p className="contribute-card-paragraph">
                                Clean, appropriate clothing, footwear and
                                blankets help children feel comfortable and
                                confident. Seasonal garments and school uniforms
                                are particularly useful. Please ensure items are
                                in good condition.
                            </p>
                        </div>
                        <div
                            className="contribute-card-media"
                            aria-hidden="true"
                        >
                            <img
                                src={ClothingImage}
                                alt="Sample: neatly folded clothing"
                                className="contribute-card-image"
                            />
                        </div>
                    </article>

                    {/* Card 4 — Image then Text */}
                    <article
                        className="contribute-card contribute-card--reverse"
                        aria-labelledby="contribute-volunteer-title"
                    >
                        <div className="contribute-card-text">
                            <h2
                                id="contribute-volunteer-title"
                                className="contribute-card-title"
                            >
                                Volunteer Work & Skills
                            </h2>
                            <p className="contribute-card-paragraph">
                                Time and skills create long-term impact:
                                tutoring, basic IT coaching, sports or arts
                                workshops, career talks, internships and
                                structured project collaborations. Student
                                groups and professionals are welcome to propose
                                short-term or recurring engagement aligned with
                                the children's needs.
                            </p>
                        </div>
                        <div
                            className="contribute-card-media"
                            aria-hidden="true"
                        >
                            <img
                                src={VolunteerImage}
                                alt="Sample: volunteer teaching children"
                                className="contribute-card-image"
                            />
                        </div>
                    </article>
                </section>

                <ContriContact />
            </main>

            <Footer />
        </>
    );
};

export default Contribute;
