import React from 'react';
import './Intro.css';
import heroImage from '../../Assets/hero.png';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
    return (
        <>
            <div className='hero' id='intro'>
                <div className="hero-left">
                    <TypeAnimation
                        sequence={[
                            'WEB DEVELOPMENT',1000,'SOFTWARE DEVELOPMENT',2000,"IT SERVICES"
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                    <span>Welcome to Manasvi Technologies (OPC) Pvt. Ltd., where we specialize in transformative App Development, Web Development, and comprehensive IT Services. Our mission is to drive your success through cutting-edge technology solutions tailored to your unique needs and aspirations.</span>
                    <a href="https://manasvitech.in" target='_blank' rel="noreferrer" className='btn-grad-intro'>Explore More</a>
                </div>
                <div className="right">
                    <img src={heroImage} alt="" />
                </div>
            </div>
            {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> 
            */}
            <div
                className="blur"
                style={{
                    // background: "#d8dbf2",
                    background:"linear-gradient(to right, #ff6e7f 0%, #bfe9ff 51%, #ff6e7f 100%)",
                    top: "2rem",
                    width: "30rem",
                    height: "60rem",
                    left: "53rem",
                }}
            ></div>
        </>
    )
}

export default Intro;
