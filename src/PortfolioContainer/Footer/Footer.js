import React from "react";
import "./Footer.css";
// import { Fade } from "react-reveal";
import { sociallinks} from "../../portfolio";
import { details } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
    return (
      <div className="footer-div" >
        <div data-aos="fade-up" data-aos-duration="1500">
          <div className="row fb" >
            <div className="col-12 col-sm-6 col-md-6">
              <div className="ml-5 ">
              <p className="mt-3 primary-text f-head"> Reach Out To Me !! </p>
              <p className="f-desc ">DISCUSS A PROJECT OR JUST WANT TO SAY HI?  MY INBOX IS OPEN FOR ALL .</p>
              <a href={sociallinks.email} target="_blank" className="mail" >CHIKATE.NINAD00@GMAIL.COM</a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 mt-3">
              <p className="let ml-5 primary-text">Follow Me</p>
               <div class="icons pb-5">
                <a href={sociallinks.facebook_link} target='_blank'>
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-facebook-f"></span>
                  </div>
                  <div class="text">
                    Facebook
                  </div>
                </a>
                <a href={sociallinks.twitter_link} target='_blank'>
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-twitter"></span>
                  </div>
                  <div class="text">
                    Twitter
                  </div>
                </a>
                <a href={sociallinks.instagram_link} target='_blank'>
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-instagram"></span>
                  </div>
                  <div class="text">
                    Instagram
                  </div>
                </a>
                <a href={sociallinks.ilinkedin_link} target='_blank'>
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-linkedin-in"></span>
                  </div>
                  <div class="text">
                    Linkedin
                  </div>
                </a>
                <a href={sociallinks.git_link} target='_blank'>
                  <div class="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fab fa-github"></span>
                  </div>
                  <div class="text">
                    Github
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p className="footer-text mt-4" style={{ color: props.theme.secondaryText }}>
            Handcrafted with <span role="img">❤️</span> by {details.title}
          </p>
        </div>
      </div>
    )
    };
