import React from 'react';
import aboutMe from '../../components/App/assets/images/about-me.png';
import {graphql, useStaticQuery} from "gatsby";

const About = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        social {
                            twitter
                            github
                            linkedin
                        }
                    }
                }
            }
        `
    )
    const social = site?.siteMetadata?.social;
    return (
        <div id="about" className="about-area four pt-100 pb-70">
            <div className="common-right-text">
                <span>ABOUT</span>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img">
                            <img src={aboutMe} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content">
                            <div className="section-title two">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>Hey It's Theo Despoudis. I Am An Experienced Software Engineer dedicated to <span>React.js, Typescript</span> and <span>Go</span></h2>
                                <p>I possess and unique set of skills in client-server architectures and Web Application technologies. I welcome you on my website</p>
                            </div>

                            <ul>
                                <li>
                                    <a href={social.twitter}>
                                        <i className='bx bxl-twitter' />
                                    </a>
                                </li>
                                <li>
                                    <a href={social.linkedin}>
                                        <i className='bx bxl-linkedin' />
                                    </a>
                                </li>
                                <li>
                                    <a href={social.github}>
                                        <i className='bx bxl-github' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;