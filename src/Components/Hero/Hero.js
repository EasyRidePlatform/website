import React from "react";
import './Hero.css'
import googlestore from '../../images/googlestore.png'
import whatsapp from '../../images/whatsapp.png'
import main from '../../images/main.png'


const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="left sub" data-aos="slide-up">
                    <div className='div' >
                        <h6>Ride<span> Safe</span><br/> Ride <span> Easy!</span></h6>

                        <p> Your <i><u>All-In-One</u> </i> Riding App</p>
                    </div>
                    <div className="icons" data-aos="slide-up">
                        <span className="span">
                            <a href="/"><img src={googlestore} alt="" className="storeIcon googlestore" /></a>

                            <h6>Coming Soon on <br/>Google Play</h6>
                        </span>

                        <span className="span" data-aos="slide-up">
                            <a href="https://chat.whatsapp.com/FGdJXs2frNeGq1eR0rwmdH"><img src={whatsapp} alt="" className="whatsapp"/></a>
                            <h6>Join Our Community<br/> For Latest Updates</h6></span>

                    </div>
                </div>

                <div className="right sub" data-aos="slide-up" >
                    <img src={main} alt="" className="phone_img"/>
                </div>
            </section>
            

        </>
    );
};

export default Hero;
