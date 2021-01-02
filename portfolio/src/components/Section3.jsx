import React from "react";
import '../scss/Home.scss';
import { Collapse, Row, Col } from 'antd';
import { TeamOutlined, ContainerOutlined, FileDoneOutlined, GlobalOutlined, FileSearchOutlined, SwapOutlined , MoneyCollectOutlined} from '@ant-design/icons';

const { Panel } = Collapse;

const Section3 = () => {

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
                            <FileSearchOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Auditing and Assurance</p>
                            <ul className='desc'>
                                <li>-	Statutory Audit     </li>
                                <li>-	Internal Audit           </li>
                                <li>-	Tax Audit               </li>
                                <li>-	Systems Audit                 </li>
                                <li>-	Management Audit    </li>
                                <li>-	Agreed Upon Procedures         </li>
                                <li>-	Certification Services            </li>
                                <li>-	Special Audits                 </li>
                            </ul>
                        </div>
                    </div>

                    <div className='services'>
                        <div className='image'>
                            <ContainerOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Accounting Services</p>
                            <ul className='desc'>
                                <li>-	Book Keeping & Accounting   </li>
                                <li>-	Bank Reconciliation               </li>
                                <li>-	Invoicing                 </li>
                                <li>-	Fixed Asset Management                      </li>
                                <li>-	Inventory Management   </li>
                                <li>-	TDS Management               </li>
                                <li>-	Preparing and formatting Income Statement and Balance sheets on a regular basis                </li>
                                <li>-	Preparing ageing reports and summaries                       </li>
                                <li>-	Categorization of income and expenses   </li>
                                <li>-	Partnership Accounting              </li>
                                <li>-	Proprietorship Accounting               </li>
                            </ul>
                        </div>
                    </div>

                    <div className='services'>
                        <div className='image'>
                            <GlobalOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Corporate and SEBI Compliances</p>
                            <ul className='desc'>
                                <li>-	Companies and LLP Incorporation   </li>
                                <li>-	Revival of Companies      </li>
                                <li>-	Trademark Registration            </li>
                                <li>-	Compliance of All companies including Listed Companies.            </li>
                                <li>-	Restructuring of Companies (Amalgamation, Merger & Demerger)   </li>
                                <li>-	Dematerialization of Shares       </li>
                                <li>-	Other Secretarial Assignments including Legal Consultancy.            </li>
                                <li>-	SME and Main Board IPO.            </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='rowOne'>

                    <div className='services'>
                        <div className='image'>
                            <SwapOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Direct Tax Services</p>
                            <ul className='desc'>
                                <li>-	Corporate Tax Matters</li>
                                <li>-	Individual & Non-Resident Indian Tax Matters</li>
                                <li>-	LLP, Partnership taxation</li>
                                <li>-	Trust Taxation	</li>
                                <li>-   TDS Return</li>
                            </ul>
                        </div>
                    </div>

                    <div className='services'>
                        <div className='image'>
                            <MoneyCollectOutlined className='icon'  />
                        </div>

                        <div>
                            <p className='head'>Goods and services tax</p>
                            <ul className='desc'>
                                <li>-   IGST Registration</li>
                                <li>-	Amendments in Registration (Core Field/Non-Core Field)</li>
                                <li>-	Monthly Return filing</li>
                                <li>-	Annual Returns </li>
                                <li>-	GST Audit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;