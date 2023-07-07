import React from "react";
import './Info.css'
import track from '../../images/track.png'
import sos from '../../images/sos.png'
import easy from '../../images/easy.png'


const Info = () => {
    return (
        <>

            <h1 className="info_head" data-aos="slide-up" >Features</h1>
            <section className="info" id="tracking">
                <section className="sub_info left_info" data-aos="slide-up">
                    <img src={track} alt="" className="phone" />
                </section>
                <section className="sub_info right_info" data-aos="slide-up">
                    <div >
                        <h1><span>Live Group Tracking</span>&nbsp; <i className="fa-solid fa-location-pin"></i></h1>
                        <p>Ensure all members are on route and safe</p>
                    </div>
                </section>
            </section>

            <section className="info" id="smartsos">
                <section className="sub_info left_info" data-aos="slide-up">
                    <img src={sos} alt="" className="phone"/>
                </section>
                <section className="sub_info right_info" data-aos="slide-up">
                    <div>
                        <h1><span>Smart SOS</span> &nbsp;<i className="fa-solid fa-kit-medical"></i></h1>
                        <p>Respond quickly to any emergency</p>
                    </div>
                </section>
            </section>


            <section className="info" id="about">
                <section className="sub_info left_info" data-aos="slide-up">
                    <img src={easy} alt="" className="phone" />
                </section>
                <section className="sub_info right_info" data-aos="slide-up">
                    <div >
                        <h1><span>Easy To Use</span>&nbsp; <i className="fa-solid fa-award"></i></h1>
                        <p>Ride Management for Everyone</p>
                    </div>
                </section>
            </section>

            <hr/>

        </>
    );
};

export default Info;
