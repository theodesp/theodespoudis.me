import React from 'react'
import { Link } from 'gatsby'
import work1 from '../../components/App/assets/images/work/work1.jpg'
import work2 from '../../components/App/assets/images/work/work2.jpg'
import work3 from '../../components/App/assets/images/work/work3.jpg'
import work4 from '../../components/App/assets/images/work/work4.jpg'
import work5 from '../../components/App/assets/images/work/work5.jpg'
import work6 from '../../components/App/assets/images/work/work6.jpg'
import work7 from '../../components/App/assets/images/work/work7.jpg'
import work8 from '../../components/App/assets/images/work/work8.jpg'
import work9 from '../../components/App/assets/images/work/work9.jpg'
import work10 from '../../components/App/assets/images/work/work10.jpg'

const Works = () => {
    return (
        <div id="portfolio" className="work-area ptb-100">
            <div className="container">
                <div className="section-title four">
                    <h2>At First See My Awesome <span>Work</span> That Gain A Vast Popularity</h2>
                </div>  

                <div className="row">
                    <div className="col-lg-4">
                        <div className="work-item">
                            <div className="overlay">
                                <img src={work1} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Pancake Logo
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="overlay">
                                <img src={work2} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Business Card
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="overlay">
                                <img src={work3} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Brochure
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="work-item">
                            <div className="overlay">
                                <img src={work4} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link href="/work-details">
                                            <a target="_blank">Flyer</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="overlay">
                                <img src={work5} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Packaging
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="overlay">
                                <img src={work6} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Illustration
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="work-item">
                            <div className="overlay">
                                <img src={work7} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            UX/UI
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="overlay">
                                <img src={work8} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Web Design
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="overlay">
                                <img src={work9} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Web Development
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="work-item">
                            <div className="overlay">
                                <img src={work10} alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link to="/work-details">
                                            Animation
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/works" className="common-btn four">
                        Explore All Work
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Works