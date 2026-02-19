import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import heroImage from "./assets/hero.jpg";
import Footer from "./Components/Footer/Footer";
import Location from "./Components/Location/Location";
import Blog from "./Components/Blog/Blog";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero
                backgroundImage={heroImage}
                title="Don Bosco Ashalayam"
                tagline="A home. A future."
            />

            <Blog />

            <Location />
            <Footer />
        </>
    );
};

export default App;
