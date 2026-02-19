import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import heroImage from "./assets/hero.webp";
import Footer from "./Components/Footer/Footer";
import Location from "./Components/Location/Location";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Info from "./Components/Info/Info";

const App = () => {
    return (
        <>
            <Navbar />

            <Hero
                backgroundImage={heroImage}
                title="Don Bosco Ashalayam"
                tagline="A home. A future."
            />

            <Info />
            <Blog />
            <Contact />
            <Location />
            <Footer />
        </>
    );
};

export default App;
