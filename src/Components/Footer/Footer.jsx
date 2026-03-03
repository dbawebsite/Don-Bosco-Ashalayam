import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="appfooter" role="contentinfo">
            <div className="footertext">
                <div className="footleft">
                    <h2 className="dbaname">Don Bosco Ashalayam</h2>
                </div>
                <div className="footright">
                    <p className="dbaemail">Place Email Here</p>
                    <p className="dbaaddress">
                        WZ 1211, Ashram Gali, Harijan Basti, Palam Extension,
                        Palam, New Delhi, Delhi, 110077
                    </p>
                </div>
            </div>
            <p className="copyright">Don Bosco Ashalayam © 2026</p>
        </footer>
    );
};

export default Footer;
