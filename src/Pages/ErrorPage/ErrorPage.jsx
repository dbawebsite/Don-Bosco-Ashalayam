import React from "react";
import "./ErrorPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className="errorpage">
                <h1>Page Does Not Exist</h1>
                <a role="gotohome" href="/">
                    Back to Home
                </a>
            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;
