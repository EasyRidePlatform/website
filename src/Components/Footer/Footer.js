import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <head>
                <script
                    src="https://kit.fontawesome.com/66aa7c98b3.js"
                    crossorigin="anonymous"
                ></script>

            </head>

            <body>
                <div class="footer">
                    <div class="heading">
                        {/* <!-- <h2>EasyRide</h2> --> */}
                    </div>
                    <div class="content">
                        {/* <!-- <div class="services">
                            <h3>Features</h3>
                            <p><a href="#tracking">Live Tracking</a></p>
                            <p><a href="#smartsos">Smart SOS</a></p>
                            <p><a href="#about">Easy To Use</a></p>
                            <p><a href="#contact">Contact Us</a></p>
                        </div> --> */}
                        <div class="social-media">
                            <h3>Social</h3>
                            <p>
                                <a href="/"
                                ><i class="fab fa-linkedin"></i> Linkedin</a
                                >
                            </p>
                            <p>
                                <a href="/"
                                ><i class="fab fa-facebook"></i> Facebook</a
                                >
                            </p>
                            <p>
                                <a href="https://www.instagram.com/easyrideplatform/"
                                ><i class="fab fa-instagram"></i> Instagram</a
                                >
                            </p>
                        </div>
                        <div class="links">
                            <h3>Quick links</h3>
                            <p><a href="#top">Home</a></p>
                            <p><a href="#about">About</a></p>
                            <p><a href="#contact">Contact</a></p>
                        </div>
                        {/* <!-- <div class="details">
                            <h3 class="address">Address</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                adipisicing elit. Cupiditate, qui!
                            </p>
                            <h3 class="mobile">Mobile</h3>
                            <p><a href="#">+91-12225*****</a></p>
                            <h3 class="mail">Email</h3>
                            <p><a href="#">easyride@gmail.com</a></p>
                        </div> --> */}
                    </div>
                    <footer>
                        <hr />
                        © 2023 EasyRide.
                    </footer>
                </div>
            </body>

        </>
    );
};

export default Footer;
