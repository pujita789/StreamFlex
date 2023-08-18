import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
            This is a project made by Pujita Chakraborty, front end devloper.I am learning new skills and love to serach new tutorials.After going through a lot research i found this video on youtube,making of a movie streaming web-app. Skills I have used in this are Vite and REACT-Redux tool , and for fetching the  movie data I have used TMDB.
            my Other Projects are at   my github profile.           <br/>    <span className="icon" ><a href="https://github.com/pujita789">
                        <FaGithub />
                    </a></span>  You can explore and let me know.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
