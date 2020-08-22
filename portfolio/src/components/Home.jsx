import React from 'react';
import {
    EnvironmentOutlined,
    MobileOutlined,
    MessageOutlined,
    LinkedinFilled,
    FacebookFilled,
    InstagramFilled,
    TwitterOutlined
} from '@ant-design/icons';
import '../scss/Home.scss';
import profiles from '../images/profile.jpg'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='header'>
                <div className='address'>
                    <div className='iconDiv'>
                        <EnvironmentOutlined className='icons'/>
                    </div>
                    <div className='details'>
                        <p>3008 Sarah Drive</p>
                        <p>Franklin,LA 70538</p>
                    </div>
                </div>

                <div className='address'>
                    <div className='iconDiv'>
                        <MobileOutlined className='icons'/>
                    </div>
                    <div className='details'>
                        <p>+91 9999999999</p>
                        <p>MON - FRI,8AM - 7PM</p>
                    </div>
                </div>

                <div className='address'>
                    <div className='iconDiv'>
                        <MessageOutlined className='icons'/>
                    </div>
                    <div className='details'>
                        <p>contact@gmail.com</p>
                        <p>REPLY IN 24 HOURS</p>
                    </div>
                </div>
            </div>


            <div className='intoCard'>
                <div className='card'>
                    <div>
                        <img src={profiles} alt='profile'/>
                    </div>

                    <div className='info'>
                        <p className='name'>Bhanu Pratap Singh</p>
                        <p className='post'>Frontend Developer</p>
                    </div>

                    <div className='otherDetails'>
                        <p><span className='heads'>BORN : </span>August 25, 1987 </p>
                        <p><span className='heads'>EMAIL : </span>mymith@mywebpage.com </p>
                        <p><span className='heads'>MARITAL STATUS : </span> Married
                        </p>
                    </div>

                    <div className='social'>
                        <a><LinkedinFilled className='icons'/></a>
                        <a><FacebookFilled className='icons'/></a>
                        <a><InstagramFilled className='icons'/></a>
                        <a><TwitterOutlined className='icons'/></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;