import React from "react";
import "./Location.css";

const Location = () => {
    return (
        <section className="db-location" aria-label="Location">
            <div className="db-location__inner">
                <div className="db-location__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4155.67122883996!2d77.0745883!3d28.5891548!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x390d1b3e617e4d97%3A0x557ac080ec958a4a!2sDon%20Bosco%20Ashalayam!5e1!3m2!1sen!2sin!4v1771536087992!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Don Bosco Ashalayam Location"
                    ></iframe>
                </div>

                <div className="db-location__content">
                    <h3 className="db-location__title">Don Bosco Ashalayam</h3>

                    <p className="db-location__address">
                        WZ 1211, Ashram Gali, Harijan Basti, Palam Extension,
                        Palam, New Delhi, Delhi, 110077
                    </p>

                    <a
                        href="https://www.google.com/maps?q=Don+Bosco+Ashalayam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="db-location__button"
                    >
                        Get Directions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Location;
