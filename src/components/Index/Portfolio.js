import React from 'react'
import { Link } from 'gatsby'
import portfolio1img from '../../components/App/assets/images/portfolio/portfolio1.jpg'
import portfolio2img from '../../components/App/assets/images/portfolio/portfolio2.jpg'
import portfolio3img from '../../components/App/assets/images/portfolio/portfolio3.jpg'
import portfolio4img from '../../components/App/assets/images/portfolio/portfolio4.jpg'
import portfolio5img from '../../components/App/assets/images/portfolio/portfolio5.jpg'

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-area border-bottom ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">PORTFOLIO</span>
                    <h2>See My Works Which Will Amaze You</h2>
                </div>
                
                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={portfolio1img} alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="/case-study-details">
                                            Restaurant App
                                        </Link>
                                    </h3>
                                    <span>APP DESIGN</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

                                    <Link to="/case-study-details">
                                        Explore More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={portfolio2img} alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="/case-study-details">
                                            Vegetable Shop
                                        </Link>
                                    </h3>
                                    <span>Vegetable</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link to="/case-study-details">
                                        Explore More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={portfolio3img} alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="/case-study-details">
                                            Business Card Design
                                        </Link>
                                    </h3>
                                    <span>Card</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nostrum ipsam suscipit dignissimos quis animi quod culpa</p>
                                    <Link to="/case-study-details">
                                        Explore More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={portfolio4img} alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="/case-study-details">
                                            Food Illustration
                                        </Link>
                                    </h3>
                                    <span>Illustration</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link to="/case-study-details">
                                        Explore More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={portfolio5img} alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="/case-study-details">
                                            Package Design
                                        </Link>
                                    </h3>
                                    <span>Package</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link to="/case-study-details">
                                        Explore More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="#" className="common-btn">
                        Explore All Work
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio