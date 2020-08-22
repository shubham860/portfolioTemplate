import React from "react";
import '../scss/Home.scss';
import { Collapse, Row, Col } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Section3 = () => {

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    return (
        <div className='section3'>
            <div className="heads">
                <div className="border"></div>
                <div className="heading">
                    <p className="main">Services</p>
                    <p className="desc">FOLLOWING SERVICES</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Section3;