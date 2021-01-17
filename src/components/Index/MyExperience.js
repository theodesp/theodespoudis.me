import React from 'react'
import { Link } from 'gatsby'

const MyExperience = () => {
    return (
        <div className="experience-area border-bottom ptb-100">
            <div className="common-right-text">
                <span>EXPERIENCE</span>
            </div>

            <div className="container">
                <div className="section-title">
                    <span className="sub-title">MY EXPERIENCE</span>
                    <h2>I Have <span>5+</span> Years Of Experience With Many Awards</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>

                <div className="experience-content">
                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2014-2016</span>
                            </li>
                            <li>
                                <span>Graphic Designer, Art Company, DC</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2016-2017</span>
                            </li>
                            <li>
                                <span>UX/UI Designer, Dribble</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2017-2018</span>
                            </li>
                            <li>
                                <span>Product Designer, Dribble</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2018-2020</span>
                            </li>
                            <li>
                                <span>Senior Designer, Dribble</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <p>I have also done many freelance work alongside with the company's work which helps me to upgrade my skills and passion.</p>

                    <div className="text-center">
                        <Link to="#" className="common-btn">
                            See My Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyExperience