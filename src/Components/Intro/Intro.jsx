import React from 'react';
import './Intro.css';
import heroImage from '../../Assets/hero.png';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
    return (
        <>
            <div className='hero'>
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
                    <span>Accelerating digital innovation for the world
                        Share your idea, we will build your product and help achieve your vision.</span>
                </div>
                <div className="right">
                    <img src={heroImage} alt="" />
                </div>
            </div>
            {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> */}
            <div
                className="blur"
                style={{
                    background: "#C1F5FF",
                    top: "17rem",
                    width: "21rem",
                    height: "11rem",
                    left: "-9rem",
                }}
            ></div>
        </>
    )
}

export default Intro;
