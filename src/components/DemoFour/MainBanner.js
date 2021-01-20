import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Parallax } from 'react-parallax';

const MainBanner = () => {
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
        <Parallax
            bgImage={require('../App/assets/images/banner/main-banner.png')}
            bgImageAlt="Sky"
            strength={-300}
            className="parallax-container"
        >
            <div id="home" className="banner-area four">

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="banner-content">
                                <span className="sub-head"></span>
                                <h1>Theo Despoudis</h1>
                                <p>Hello I am a <span>Software Engineer</span> from Ireland. I have rich experience in React.js, Typescript and Go</p>

                                <div className="banner-btn-area">
                                    <AnchorLink
                                        offset={() => -1}
                                        className="common-btn"
                                        href="#contact"
                                    >
                                        Contact Me
                                    </AnchorLink>
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
        </Parallax>
    )
}

export default MainBanner;