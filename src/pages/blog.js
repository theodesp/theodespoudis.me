import React from 'react' 
import TopHeader from '../components/Blog/TopHeader'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/Blog/Footer'
import { Link } from 'gatsby'
import blog10 from '../components/App/assets/images/blog/blog10.jpg'
import blog11 from '../components/App/assets/images/blog/blog11.jpg'
import blog12 from '../components/App/assets/images/blog/blog12.jpg'
import blog13 from '../components/App/assets/images/blog/blog13.jpg'
import blog14 from '../components/App/assets/images/blog/blog14.jpg'
import blog15 from '../components/App/assets/images/blog/blog15.jpg'
import blog16 from '../components/App/assets/images/blog/blog16.jpg'
import blog17 from '../components/App/assets/images/blog/blog17.jpg'
import blog18 from '../components/App/assets/images/blog/blog18.jpg'

const Blog = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Blog" 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
            /> 

            <div id="blog" className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog10} alt="Blog" />
                                    </Link>
                                    <h4>12 <span>Oct</span></h4>
                                </div>

                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How To Improve Design Sense & Skill To Manage Design Work
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>

                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog11} alt="Blog" />
                                    </Link>
                                    <h4>13 <span>Oct</span></h4>
                                </div>

                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How Design Became Fun In My Life & Took The Empty Space Of Heart
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>

                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog12} alt="Blog" />
                                    </Link>
                                    <h4>14 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            Old Tradition Of Art Are Changed Throughout These Years
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog13} alt="Blog" />
                                    </Link>
                                    <h4>15 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How To Become A Pro Level Graphic Designer
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog14} alt="Blog" />
                                    </Link>
                                    <h4>16 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How Graphic Design Take The Place Of Next Generation
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog15} alt="Blog" />
                                    </Link>
                                    <h4>17 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How Photography Skill Helps In Graphic Design Profession
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog16} alt="Blog" />
                                    </Link>
                                    <h4>18 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How A Graphic Designer Travel All Over The World
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog17} alt="Blog" />
                                    </Link>
                                    <h4>19 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How To Manage Tuff Project With A Cool Mind & Succeeded
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link to="/blog-details">
                                        <img src={blog18} alt="Blog" />
                                    </Link>
                                    <h4>20 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link to="/blog-details">
                                            How To Remain Cool In Every Tuff Situation & Overcome This
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                    <Link to="/blog-details" className="blog-btn">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            <Footer />
        </React.Fragment>
    )
}

export default Blog