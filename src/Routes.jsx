import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./Pages/About/About";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Gallery from "./Pages/Gallery/Gallery";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
