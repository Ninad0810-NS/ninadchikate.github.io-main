import React from 'react'
import Typical from 'react-typical';
import SoftwareSkill from "../softwareSkills/SoftwareSkill";
import "./Experience.css";
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { experience_work } from "../../portfolio.js";
import profile from "../../assets/Home/profile.jpeg"
import Experience from "../../assets/Home/office_work.svg"
import web from "../../assets/Home/g3.gif"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = (props) => {
    const theme = props.theme;
    return (
        <div>
            
            <div className='container bg mb-5 '>
                <div className='row row1 justify-content-between' style={{ textAlign: 'center', }} >

                    <div className='col-12 col-sm-6 col-md-6 mb-2' >
                    <div data-aos="fade-left"  data-aos-duration="2000">
                        <div className='picture'>
                            <img src={Experience} style={{ width: '100%', height: '100%', }} />
                        </div>
                    </div>
                    </div>

                    <div className='col-12 col-sm-6 col-md-6 mt-5' style={{ justifyContent: 'center', }} >
                    <div data-aos="fade-right" data-aos-duration="3000"  style={{ alignItems: 'center', }}>
                        <p className='primary-text ' style={{ fontSize: '40px' }}>Work </p>

                        <div className="cert-card1">
                                <div className="content">
                                    <a href={experience_work.website_link}
                                        target="_blank"
                                        rel="noopener noreferrer" >
                                        <div className="content-overlay"></div>
                                        <div
                                            className="cert-header"
                                            style={{ backgroundColor: experience_work.color_code }}>
                                            <img
                                                className="logo_img"
                                                src={require(`../../assets/Home/${experience_work.logo_path}`)}
                                        
                                                alt={experience_work.alt_name}
                                            />
                                        </div>
                                        <div className="content-details fadeIn-top">

                                            <h3 className="content-title" >
                                           WEBSITE
                                            </h3>
                                        </div>
                                    </a>
                                </div>
                              
                                <div className="cert-body">
                                    <h2 className="cert-body-title" >
                                    {experience_work.title}
                                    </h2>
                                    <h3 className="cert-body-subtitle">
                                        {experience_work.subtitle}
                                    </h3>
                                    <h3 className="cert-body-subtitle">
                                        {experience_work.company}
                                    </h3>
                                </div>
                            </div>
                        </div>
                </div>

                </div>
            </div>
           
            {/* Certifications */}
            <div className='container mb-5'>
              
            </div>
        </div>

    );
}


export default About
