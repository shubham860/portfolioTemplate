import React from "react";
import '../scss/Home.scss';

const Section1 = () => {
    return (
        <div className='section1'>
            <div className="heads">
                <div className="border"></div>
                <div className="heading">
                    <p className="main">About me</p>
                    <p className="desc">PROFESSIONAL PATH</p>
                </div>
            </div>
            <div className="details">
                <p>Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque
                    sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla maximus pellentes que velit, quis consequat nulla effi citur at.
                    Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus.
                    Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla
                    effi citur at.Maecenas sed massa tristique.</p>
            </div>
        </div>
    )
}

export default Section1;