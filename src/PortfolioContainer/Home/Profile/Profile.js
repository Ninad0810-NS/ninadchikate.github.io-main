import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import { details } from '../../../portfolio';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'M <span className='highlighted-text'>{details.title}</span>
                        </span>
                    </div>
                    <div className='profile-detials-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    steps={
                                        [
                                            'Full Stack Developer 😘 !', 500,
                                            'Web Developer ❤️‍🔥!', 500,
                                            'Android Developer  ❤️ !', 500
                                        ]}
                                    loop={Infinity}
                                    wrapper="p"
                                ></Typical>
                            </h1>
                            <span className='profile-role-tagline'>
                                {details.description}
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href='CV_Nomesh.pdf' download='Nomesh Tighare.pdf'>
                            <button className='btn highlighted-btn'> GetResume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
