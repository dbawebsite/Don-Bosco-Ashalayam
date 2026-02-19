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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer at ullamcorper neque.
                                Vivamus fermentum, nunc et placerat volutpat,
                                mauris lacus tempus justo, non efficitur nisl
                                lacus et magna. Quisque pulvinar ipsum et neque
                                suscipit, vitae convallis quam gravida.
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse potenti. Sed vitae
                                mi id sapien tristique vehicula. Nam nec arcu
                                non orci faucibus fermentum. Donec vitae mi ut
                                ipsum dictum convallis.
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque habitant morbi
                                tristique senectus et netus et malesuada fames
                                ac turpis egestas. Maecenas non purus quis justo
                                tincidunt interdum quis sed arcu.
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
                                    Title 1
                                </h3>
                                <p className="db-about__feature-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur sit amet eros ac
                                    justo bibendum faucibus. Praesent
                                    ullamcorper, massa id tincidunt faucibus,
                                    nunc velit aliquet arcu, in bibendum velit
                                    ipsum a sapien. Integer at urna id lacus
                                    ultrices sollicitudin.
                                    <br />
                                    <br /> Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Vestibulum ante
                                    ipsum primis in faucibus orci luctus et
                                    ultrices posuere cubilia curae; Duis sed
                                    arcu ut lacus placerat dapibus. Sed
                                    faucibus, urna quis volutpat tincidunt,
                                    ipsum lorem luctus lectus, vitae gravida
                                    erat sem non risus.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum ante ipsum
                                    primis in faucibus orci luctus et ultrices
                                    posuere cubilia curae; Duis sed arcu ut
                                    lacus placerat dapibus. Sed faucibus, urna
                                    quis volutpat tincidunt, ipsum lorem luctus
                                    lectus, vitae gravida erat sem non risus.
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
                                    Title 2
                                </h3>
                                <p className="db-about__feature-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum ante ipsum
                                    primis in faucibus orci luctus et ultrices
                                    posuere cubilia curae; Duis sed arcu ut
                                    lacus placerat dapibus. Sed faucibus, urna
                                    quis volutpat tincidunt, ipsum lorem luctus
                                    lectus, vitae gravida erat sem non risus.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum ante ipsum
                                    primis in faucibus orci luctus et ultrices
                                    posuere cubilia curae; Duis sed arcu ut
                                    lacus placerat dapibus. Sed faucibus, urna
                                    quis volutpat tincidunt, ipsum lorem luctus
                                    lectus, vitae gravida erat sem non risus.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vestibulum ante ipsum
                                    primis in faucibus orci luctus et ultrices
                                    posuere cubilia curae; Duis sed arcu ut
                                    lacus placerat dapibus. Sed faucibus, urna
                                    quis volutpat tincidunt, ipsum lorem luctus
                                    lectus, vitae gravida erat sem non risus.
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
