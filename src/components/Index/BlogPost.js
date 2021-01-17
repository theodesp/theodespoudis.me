import React from 'react'
import { Link } from 'gatsby'
import blog1 from '../App/assets/images/blog/blog1.jpg'
import blog2 from '../App/assets/images/blog/blog2.jpg'

const BlogPost = () => {
    return (
        <div id="blog" className="blog-area border-bottom ptb-100">
            <div className="common-right-text">
                <span>BLOG</span>
            </div>

            <div className="container">
                <div className="section-title">
                    <span className="sub-title">BLOG</span>
                    <h2>Read My <span>Blog</span> To Know More About My Design Process</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="blog-item">
                            <div className="top">
                                <Link to="/blog-details">
                                    <img src={blog1} alt="Blog" />
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

                                <Link to="/blog-details" className="blog-btn">
                                    Read More <i className="flaticon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="blog-item">
                            <div className="top">
                                <Link to="/blog-details">
                                    <img src={blog2} alt="Blog" />
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
                </div>

                <div className="text-center">
                    <Link to="/blog" className="common-btn">
                        Explore Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPost