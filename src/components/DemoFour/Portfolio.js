import React from 'react';
import { Link } from 'gatsby';
import reactWorkshopBook from '../../components/App/assets/images/portfolio/ReactWorkshopBook.png';
import advancedGo from '../../components/App/assets/images/portfolio/advanced_go.png';
import ocjpLogo from '../../components/App/assets/images/portfolio/ocjp-logo.png';
import algorithms from '../../components/App/assets/images/portfolio/Algorithms.png';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-area border-bottom ptb-100">
            <div className="common-right-text">
                <span>PORTFOLIO</span>
            </div>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">PORTFOLIO</span>
                    <h2>See what you can learn from me</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={reactWorkshopBook} alt="React Workshop Book" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="https://www.packtpub.com/product/the-react-workshop/9781838645564" rel="noopener" target="_blank">
                                            React Workshop Book
                                        </Link>
                                    </h3>
                                    <span>BOOKS</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Master React.js by building web applications using practical tips and examples from React use cases</p>

                                    <Link to="https://www.packtpub.com/product/the-react-workshop/9781838645564" rel="noopener" target="_blank">
                                        Explore More <i className="flaticon-right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={advancedGo} alt="Advanced Go Programming in 7 Days video course" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="https://www.packtpub.com/product/advanced-go-programming-in-7-days-video/9781788994880" rel="noopener" target="_blank">
                                            Advanced Go Programming in 7 Days
                                        </Link>
                                    </h3>
                                    <span>VIDEO COURSE</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Amaze yourself by the skills you gain in a week with Golang advanced programming concepts.</p>
                                    <Link to="https://www.packtpub.com/product/advanced-go-programming-in-7-days-video/9781788994880" rel="noopener" target="_blank">
                                        Explore More <i className="flaticon-right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={ocjpLogo} alt="Oracle Java 11 Certified Programmer guide" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="https://ocp11study.netlify.app/" rel="noopener" target="_blank">
                                            Oracle Java 11 Certified Programmer Study Guide
                                        </Link>
                                    </h3>
                                    <span>STUDY GUIDE</span>
                                </div>
                                <div className="bottom-two">
                                    <p>FREE Practical study guide when working towards earning the Oracle Java 11 Certified Programmer Certification</p>
                                    <Link to="https://ocp11study.netlify.app/" rel="noopener" target="_blank">
                                        Explore More <i className="flaticon-right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src={algorithms} alt="Algorithms Book" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link to="https://techwaydotio.github.io/algorithms-sedgewick/" rel="noopener" target="_blank">
                                            Solutions to Algorithms Forth Edition
                                        </Link>
                                    </h3>
                                    <span>STUDY GUIDE</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Read and learn potential solutions to problems included in the Algorithms 4th Ed By R.Sedgewick</p>
                                    <Link to="https://techwaydotio.github.io/algorithms-sedgewick/" rel="noopener" target="_blank">
                                        Explore More <i className="flaticon-right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio