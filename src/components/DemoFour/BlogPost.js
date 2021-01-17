import React from 'react'
import { Link } from 'gatsby'
import blog3 from '../../components/App/assets/images/blog/blog3.jpg'
import blog4 from '../../components/App/assets/images/blog/blog4.jpg'
import blog5 from '../../components/App/assets/images/blog/blog5.jpg'

const BlogPost = () => {
    return (
        <div id="blog" className="blog-area four pb-70">
            <div className="container">
                <div className="section-title four">
                    <h2>Here Are Some <span>Writings</span> Which Will Give You Better Idea Of my work</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <Link to="/blog-details">
                                    <img src={blog3} alt="Blog" />
                                </Link>
                                <h4>12 <span>Oct</span></h4>
                            </div>

                            <div className="bottom">
                                <h3>
                                    <Link to="/blog-details">
                                        How To Improve Design Skill & Manage Design Work
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>

                                <Link to="/blog-details">
                                    <a className="blog-btn" target="_blank">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <Link to="/blog-details">
                                    <img src={blog4} alt="Blog" />
                                </Link>
                                <h4>13 <span>Oct</span></h4>
                            </div>

                            <div className="bottom">
                                <h3>
                                    <Link to="/blog-details">
                                        How To Solve Design Problem Within Few Hours
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
                                
                                <Link to="/blog-details" className="blog-btn">
                                    Read More <i className="flaticon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <Link to="/blog-details">
                                    <img src={blog5} alt="Blog" />
                                </Link>
                                <h4>14 <span>Oct</span></h4>
                            </div>

                            <div className="bottom">
                                <h3>
                                    <Link to="/blog-details">
                                        Old Tradition Of Art Is Changed Throughout These Years
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
    )
}

export default BlogPost