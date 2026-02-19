import React from "react";
import "./Hero.css";

export default function Hero({
    title = "Don Bosco Ashalayam",
    tagline = "A home. A future.",
    backgroundImage = null,
}) {
    const bg = backgroundImage || DefaultHeroImage;

    const bgStyle = {
        backgroundImage: `linear-gradient(#00000066, #00000066), url(${bg})`,
    };

    return (
        <section className="db-hero" role="region" aria-label="Hero section">
            <div className="db-hero__bg" style={bgStyle} aria-hidden="true" />

            <div className="db-hero__content">
                <h1 className="db-hero__title">{title}</h1>
                <p className="db-hero__tagline">{tagline}</p>
            </div>
        </section>
    );
}
