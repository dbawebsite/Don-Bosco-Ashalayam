import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import heroImage from "../../assets/about.webp";
import Footer from "../../Components/Footer/Footer";

import aboutImgLeft from "../../assets/about1.webp";
import aboutImgRight from "../../assets/about2.webp";
import Location from "../../Components/Location/Location";

const About = () => {
    return (
        <>
            <Navbar />
            <Hero
                backgroundImage={heroImage}
                title="About Us"
                tagline="Who We Are"
            />

            <section className="db-about" aria-labelledby="db-about-heading">
                <div className="db-about__inner">
                    <h2 id="db-about-heading" className="db-about__title">
                        About Don Bosco Ashalayam
                    </h2>

                    <p className="db-about__intro">
                        Don Bosco Ashalayam provides shelter, education and
                        support to underprivileged boys. Below are our guiding
                        statements — Mission, Vision and Philosophy.
                    </p>

                    <div className="db-about__grid">
                        <article
                            className="db-about__card"
                            aria-labelledby="db-about-mission"
                        >
                            <h3
                                id="db-about-mission"
                                className="db-about__card-title"
                            >
                                Mission
                            </h3>
                            <p className="db-about__card-body">
                                Building dreams and shaping the lives of at-risk
                                children and young people for a happy, healthy,
                                and harmonious society.
                            </p>
                        </article>

                        <article
                            className="db-about__card"
                            aria-labelledby="db-about-vision"
                        >
                            <h3
                                id="db-about-vision"
                                className="db-about__card-title"
                            >
                                Vision
                            </h3>
                            <p className="db-about__card-body">
                                To empower at-risk children and youth to become
                                agents of personal and social transformation. We
                                provide safe environments that protect them from
                                exploitation and neglect while supporting their
                                journey toward personal growth, freedom, and
                                dignity. We also collaborate with organizations
                                and advocate for children’s rights at national
                                and international levels.
                            </p>
                        </article>

                        <article
                            className="db-about__card"
                            aria-labelledby="db-about-philosophy"
                        >
                            <h3
                                id="db-about-philosophy"
                                className="db-about__card-title"
                            >
                                Philosophy
                            </h3>
                            <p className="db-about__card-body">
                                We believe every child deserves dignity,
                                protection, and the opportunity to grow in a
                                safe and nurturing environment. Our work is
                                rooted in compassion, empowerment, and long-term
                                rehabilitation. Through a holistic approach, we
                                help children rebuild their confidence and move
                                toward independent and responsible lives.
                            </p>
                        </article>
                    </div>

                    {/* FEATURE BLOCKS */}
                    <div className="db-about__features">
                        {/* Feature 1: Image left, text right */}
                        <div className="db-about__feature">
                            <img
                                src={aboutImgLeft}
                                alt="Students studying at Don Bosco Ashalayam"
                                className="db-about__feature-img"
                            />
                            <div className="db-about__feature-content">
                                <h3 className="db-about__feature-title">
                                    From the Streets to Mainstream Society
                                </h3>
                                <p className="db-about__feature-text">
                                    Don Bosco Ashalayam follows a structured
                                    six-phase strategy to help children
                                    transition from life on the streets into
                                    mainstream society. The process begins with
                                    Street Contact, where outreach teams build
                                    trust and rapport with children living in
                                    vulnerable conditions.
                                    <br />
                                    <br /> Once trust is established, the
                                    Weaning phase focuses on providing
                                    education, protection, and emotional
                                    support. Children then enter the Grooming
                                    stage, where they experience a safe and
                                    nurturing environment with learning
                                    opportunities, recreation, and respect.
                                    <br />
                                    <br />
                                    The next stages include Training, where
                                    children gain education and essential life
                                    skills, followed by Earning, which empowers
                                    them through vocational opportunities and
                                    employment. Finally, the Homing stage helps
                                    them reintegrate into society as
                                    independent, responsible, and confident
                                    citizens.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2: Image right, text left */}
                        <div className="db-about__feature db-about__feature--reverse">
                            <img
                                src={aboutImgRight}
                                alt="Community activities at Don Bosco Ashalayam"
                                className="db-about__feature-img"
                            />
                            <div className="db-about__feature-content">
                                <h3 className="db-about__feature-title">
                                    Our Objectives and Services
                                </h3>
                                <p className="db-about__feature-text">
                                    Our work focuses on rescuing and
                                    rehabilitating homeless and at-risk children
                                    by providing counseling, safety, and a
                                    supportive environment. We strive to reunite
                                    runaway children with their families
                                    whenever possible while ensuring their
                                    well-being after repatriation.
                                    <br />
                                    <br />
                                    For children who cannot immediately return
                                    home, we provide secure shelter, medical
                                    care, proper nutrition, education, and
                                    vocational training. These services help
                                    them develop the skills and confidence
                                    needed for a stable and independent future.
                                    <br />
                                    <br />
                                    We also encourage excellence in sports and
                                    cultural activities while offering
                                    value-based education and life-skills
                                    training for street and migrant youth.
                                    Additionally, we conduct research and
                                    documentation to strengthen childcare
                                    practices and improve initiatives that
                                    support vulnerable children and young
                                    people.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Location />

            <Footer />
        </>
    );
};

export default About;
