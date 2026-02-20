import React from "react";
import "./Gallery.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import heroImage from "../../assets/gallery.webp";
import Footer from "../../Components/Footer/Footer";

import gallery1 from "../../assets/galleryimg1.webp";
import gallery2 from "../../assets/galleryimg2.webp";
import gallery3 from "../../assets/galleryimg3.webp";
import gallery4 from "../../assets/galleryimg4.webp";
import gallery5 from "../../assets/galleryimg5.webp";
import gallery6 from "../../assets/galleryimg6.webp";
import gallery7 from "../../assets/galleryimg7.webp";
import gallery8 from "../../assets/galleryimg8.webp";
import gallery9 from "../../assets/galleryimg9.webp";
import gallery10 from "../../assets/galleryimg10.webp";
import gallery11 from "../../assets/galleryimg11.webp";
import gallery12 from "../../assets/galleryimg12.webp";
import gallery13 from "../../assets/galleryimg13.webp";
import gallery14 from "../../assets/galleryimg14.webp";
import gallery15 from "../../assets/galleryimg15.webp";
import gallery16 from "../../assets/galleryimg16.webp";
import gallery17 from "../../assets/galleryimg17.webp";
import gallery18 from "../../assets/galleryimg18.webp";
import gallery19 from "../../assets/galleryimg19.webp";
import gallery20 from "../../assets/galleryimg20.webp";
import gallery21 from "../../assets/galleryimg21.webp";
import gallery22 from "../../assets/galleryimg22.webp";
import gallery23 from "../../assets/galleryimg23.webp";
import gallery24 from "../../assets/galleryimg24.webp";
import gallery25 from "../../assets/galleryimg25.webp";
import gallery26 from "../../assets/galleryimg26.webp";
import gallery27 from "../../assets/galleryimg27.webp";
import gallery28 from "../../assets/galleryimg28.webp";
import gallery29 from "../../assets/galleryimg29.webp";
import gallery30 from "../../assets/galleryimg30.webp";
import gallery31 from "../../assets/galleryimg31.webp";
import gallery32 from "../../assets/galleryimg32.webp";
import gallery33 from "../../assets/galleryimg33.webp";
import gallery34 from "../../assets/galleryimg34.webp";
import gallery35 from "../../assets/galleryimg35.webp";
import gallery36 from "../../assets/galleryimg36.webp";
import gallery37 from "../../assets/galleryimg37.webp";
import gallery38 from "../../assets/galleryimg38.webp";
import gallery39 from "../../assets/galleryimg39.webp";

const Gallery = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery14,
        gallery15,
        gallery16,
        gallery17,
        gallery18,
        gallery19,
        gallery20,
        gallery21,
        gallery22,
        gallery23,
        gallery24,
        gallery25,
        gallery26,
        gallery27,
        gallery28,
        gallery29,
        gallery30,
        gallery31,
        gallery32,
        gallery33,
        gallery34,
        gallery35,
        gallery36,
        gallery37,
        gallery38,
        gallery39,
    ];

    return (
        <>
            <Navbar />
            <Hero
                backgroundImage={heroImage}
                title="Gallery"
                tagline="A few glimpses in our ashalayam"
            />

            <section className="db-gallery">
                <div className="db-gallery__container">
                    <h2 className="db-gallery__title">
                        Moments at Don Bosco Ashalayam
                    </h2>

                    <div className="db-gallery__grid">
                        {images.map((img, index) => (
                            <div className="db-gallery__item" key={index}>
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="db-gallery__image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Gallery;
