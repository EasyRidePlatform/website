import React from "react";
import './Contact.css'

const Hero = () => {
    return (
        <>

            <section className="contact" id="contact" >
                <div className="contact_header" data-aos="slide-up"><span>Contact Us</span></div>
                <br/>
                    <form action="/contact" method="post" className="form" data-aos="slide-up">
                        <div className="field">
                            <input
                                className="name"
                                name="username"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="field">
                            <input
                                type="number"
                                name="number"
                                maxlength="10"
                                placeholder="Number"
                                required
                            />
                        </div>
                        <div className="field">
                            <textarea placeholder="Enter Your Message Here..." name="message">
                            </textarea>
                        </div>
                        <div className="submitBtn">
                            <button type="submit">Contact</button>
                        </div>
                    </form>
            </section>
        </>
    );
};

export default Hero;
