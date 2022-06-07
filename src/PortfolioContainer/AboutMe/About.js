import React from 'react'
import Typical from 'react-typical';
import SoftwareSkill from "../softwareSkills/SoftwareSkill";
import "./About.css";
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { details, skills } from "../../portfolio.js";
import codeing from "../../assets/Home/code_thinking_re_gka2.svg"
import appdevelopment from "../../assets/Home/mobile_application_mr-4-r.svg"
import web from "../../assets/Home/heatmap_uyye.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = (props) => {
    const theme = props.theme;
    return (
        <div>
            <div className='container bg mb-5 '>
                <div className='row row1 justify-content-between mt-5'>

                    <div className='col-12 col-sm-6 col-md-6'>
                        <Fade left duration={1000} distance="20px">
                            <Fade left duration={1500} distance="20px">
                                <span className='primary-text mb-3' style={{ fontSize: '40px' }}>
                                    {" "}
                                    Hello <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="38px" />
                                    I'M <span className='hello'>{details.firstname}</span>
                                </span>
                            </Fade>
                            <Fade left duration={2000} distance="20px">
                                <h2 className=' desc mb-5'>
                                    {" "}
                                    <Typical
                                        steps={
                                            [
                                                'Full Stack Developer 👨🏻‍💻', 500,
                                                'Data Analyst 📲 ', 500,
                                            ]}
                                        loop={Infinity}
                                        wrapper="p"
                                    ></Typical>
                                </h2>
                            </Fade>
                            <Fade left duration={2500} distance="20px">
                                <h4 className='skill' style={{ textAlign: 'left',fontSize:'25px' }}>{details.description}</h4>
                            </Fade>
                            <Fade left duration={3000} distance="20px">
                                <SocialMedia theme={theme} />
                            </Fade>
                        </Fade>
                    </div>

                    <Fade right duration={1000} distance="20px">
                        <div className='col-12 col-sm-6 col-md-6 mb-2' style={{ paddingLeft: '40px', textAlign: 'center' }}>
                            <div className='picture'>
                                <img src={codeing} style={{ width: '100%', height: '100%', }}/>


                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className='container mb-5'>
            <div data-aos="zoom-in-up" data-aos-duration="1000">
                <h1 className="skills-header" >
                    What I Do?
                </h1>
                <h5 className='second_title'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h5>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="3000">
                    <SoftwareSkill logos={skills.techstack} />
                </div>

            </div>
            {/* Android Developer */}
            <div className='container'>
                <div className='row row1 justify-content-between mt-5'>
                    <div className='col-12 col-sm-6 col-md-6 mb-2 pr-5' >
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                            className='picture '>
                            <img src={appdevelopment} style={{ width: '100%', height: '100%', }} />
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6' style={{ textAlign: 'center', }} >
                       
                    <div data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">
                                <span className='primary-text mb-5' style={{ fontSize: '40px' }}>
                                    {skills.skill1}
                                </span>
                                <SoftwareSkill logos={skills.softwareSkills1} />
                                <p className='skill' style={{ textAlign: 'left' }}>{skills.skill1_desc}<br />{skills.skill12_desc}<br />{skills.skill13_desc}</p>
                                </div>
                    </div>
                </div>

            </div>
            {/* Full Stack  */}
            <div className='container'>
                <div className='row row1 justify-content-between mt-5'>
                    <div className='col-12 col-sm-6 col-md-6 mb-2 ' style={{ textAlign: 'center', }} >
                        <div data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine">
                                <span className='primary-text mb-5' style={{ fontSize: '40px', alignItems:'center'}}>
                                    {skills.skill2}
                                </span>
                                <SoftwareSkill logos={skills.softwareSkills2} />
                                <p className='skill' style={{ textAlign: 'left' }}>{skills.skill2_desc}<br />{skills.skill22_desc}<br />{skills.skill23_desc}</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6'>
                 
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                            className='picture '>
                            <img src={web} style={{ width: '100%', height: '100%', }} />
                        </div>
                    </div>  
                </div>

            </div>

        </div>

    );
}

export default About
