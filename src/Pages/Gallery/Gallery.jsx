import React from "react";
import "./Gallery.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import heroImage from "../../assets/about.jpg";
import Footer from "../../Components/Footer/Footer";

const Gallery = () => {
    return (
        <>
            <Navbar />
            <Hero
                backgroundImage={heroImage}
                title="Gallery"
                tagline="A few glimpses"
            />
            <Footer />
        </>
    );
};

export default Gallery;
