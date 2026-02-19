import React from "react";
import "./Info.css";
import infoImage from "../../assets/donbosco.webp";

const Info = () => {
    return (
        <section className="db-info">
            <div className="db-info__container">
                <div className="db-info__text">
                    <h2 className="db-info__title">Who We Are</h2>

                    <p className="db-info__paragraph">
                        Don Bosco Ashalayam is a New Delhi based non-profit
                        social and charitable organization and part of the
                        global network of the Salesians of Don Bosco. Registered
                        under the Societies Registration Act, 1860, it is a
                        licensed children’s home providing shelter, care,
                        education, and hope to young children in need of
                        protection. Through BOSCO Delhi, we support Young at
                        Risk children between 6 and 18 years of age, helping
                        them rebuild their lives with dignity, confidence, and
                        opportunity. Currently, 120 children reside at Don Bosco
                        Ashalayam and pursue their education in various schools.
                    </p>
                </div>

                <div className="db-info__image-wrapper">
                    <img
                        src={infoImage}
                        alt="Children at Don Bosco Ashalayam"
                        className="db-info__image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Info;
