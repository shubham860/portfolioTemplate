import React from "react";
import '../scss/Home.scss';
import { Collapse, Row, Col } from 'antd';
import { TeamOutlined, ContainerOutlined, FileDoneOutlined, GlobalOutlined, FileSearchOutlined, SwapOutlined , MoneyCollectOutlined} from '@ant-design/icons';

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
            <div className="details">
                <div className='rowOne'>
                    <div className='services'>
                        <div className='image'>
                            <TeamOutlined className='icon' />
                        </div>

                        <div>
                            <p className='head'>Company Registration</p>
                            <ul className='desc'>
                                <li>-	Limited Liability partnership     </li>
                                <li>-	Private Limited Company           </li>
                                <li>-	One Person Company                </li>
                                <li>-	Unlimited company                 </li>
                            </ul>
                        </div>
                    </div>

                    <div className='services'>
                        <div className='image'>
                            <ContainerOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>GST Registration</p>
                            <ul className='desc'>
                                <li>-	Application of GST Registration   </li>
                                <li>-	Composition Scheme                </li>
                                <li>-	GST Return Filing                 </li>
                                <li>-	E-Way Bill                        </li>
                            </ul>
                        </div>
                    </div>

                    <div className='services'>
                        <div className='image'>
                            <GlobalOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Accounting & Bookkeeping</p>
                            <ul className='desc'>
                                <li>-	Preparing financial statements   </li>
                                <li>-	Invoice processing services      </li>
                                <li>-	Recording information            </li>
                                <li>-	E-Accounting services            </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='rowOne'>
                    <div className='services'>
                        <div className='image'>
                            <FileSearchOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Auditing & Assurance</p>
                            <ul className='desc'>
                                <li>-	Statutory &amp; Tax Audit</li>
                                <li>-	Compliance Audit</li>
                                <li>-	Internal auditing</li>
                                <li>-	Due diligence</li>
                            </ul>
                        </div>
                    </div>

                    <div className='services'>
                        <div className='image'>
                            <SwapOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Import-Export Code</p>
                            <ul className='desc'>
                                <li>-	Duplicate IEC Certificate</li>
                                <li>-	New IEC Registration</li>
                                <li>-	Modification of IEC</li>
                                <li>-	Renewal of IEC</li>
                            </ul>
                        </div>
                    </div>

                    <div className='services'>
                        <div className='image'>
                            <MoneyCollectOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Income Tax Return Filling</p>
                            <ul className='desc'>
                                <li>-Income tax consultancy</li>
                                <li>-	Minimizing Income tax</li>
                                <li>-	Tax &amp; compliance</li>
                                <li>-	Income tax slab </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;