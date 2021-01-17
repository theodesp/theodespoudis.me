import React from 'react'

const AboutMe = () => {
    return (
        <div id="about" className="about-area four pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title four">
                                <h2>See <span>My Story</span>. It's A Long Story To Become A Graphic Designer And Continue</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span>Age:</span>
                                                26 Years
                                            </li>
                                            <li>
                                                <span>Residence:</span>
                                                San Francisco
                                            </li>
                                            <li>
                                                <span>Address:</span>
                                                <a href="#" target="_blank">12/7, Mc Street, Canada</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="right">
                                        <ul>
                                            <li>
                                                <span>Phone:</span>
                                                <a href="tel:+00932123456">+009 321 23456</a>
                                            </li>
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:hello@reton.com">hello@reton.com</a>
                                            </li>
                                            <li>
                                                <span>Website:</span>
                                                <a href="http://dexia.com" target="_blank">www.dexia.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-img-two">
                            {/*<img src={about} alt="About" />*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe