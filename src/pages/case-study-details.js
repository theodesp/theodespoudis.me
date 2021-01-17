import React from 'react'
import TopHeader from '../components/CaseStudy/TopHeader'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/CaseStudy/Footer'
import { Link } from 'gatsby'
import ContactForm from '../components/CaseStudy/ContactForm'
import caseImg from '../components/App/assets/images/case-study/case-study-details1.jpg'

const CaseStudyDetails = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Furniture Website" 
                pageTitle="Furniture Website" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Furniture Website" 
            /> 

            <div id="case-study" className="case-study-details-area pt-100">
                <div className="container">
                    <div className="details-img">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="img">
                                    <img src={caseImg} alt="Details" />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="details-img-right">
                                    <div className="details-img-inner">
                                        <h3>Client</h3>
                                        <ul>
                                            <li>Furnish Furniture Co.</li>
                                            <li>152 san Francisco, USA</li>
                                        </ul>
                                    </div>
                                    <div className="details-img-inner">
                                        <h3>Date</h3>
                                        <ul>
                                            <li>15th, September 2020</li>
                                            <li>6th, October 2020</li>
                                        </ul>
                                    </div>
                                    <div className="details-img-inner">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li>Website Design</li>
                                            <li>Website Development</li>
                                        </ul>
                                    </div>
                                    <div className="details-img-inner">
                                        <h3>Working Role</h3>
                                        <ul>
                                            <li>User Interface & UX Design</li>
                                            <li>User Interface & UI Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="details-about">
                        <h3>About The Project</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips um dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore mag na aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
                    </div>

                    <div className="details-goal">
                        <h3>Project Goal</h3>
                        <ul>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                It is a long established fact that a reader will be distracted by the readable
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                Contrary to popular belief, Lorem Ipsum is not simply random text
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                There are many variations of passages of Lorem Ipsum available
                            </li>
                            <li>
                                <i className='bx bxs-chevrons-right'></i>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined
                            </li>
                        </ul>
                    </div>

                    <div className="details-problem">
                        <h3>How I Overcome The Problem</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>

                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="img">
                                    <img src="/images/case-study/case-study-details2.jpg" alt="Details" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="img">
                                    <img src="/images/case-study/case-study-details3.jpg" alt="Details" />
                                </div>
                            </div>
                        </div>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                    </div>

                    <div className="details-pages">
                        <div className="row align-items-center">
                            <div className="col-sm-4 col-lg-4">
                                <div className="pages-item">
                                    <a className="pre-project" href="#">
                                        <i className="flaticon-right-arrow"></i> Previous Project
                                    </a>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-4">
                                <div className="pages-item two">
                                    <Link to="/case-study" className="common-btn">
                                        Go Back To Work
                                    </Link>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-4">
                                <div className="pages-item three">
                                    <a className="next-project" href="#">
                                        Next Project <i className="flaticon-right-arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-area pb-70">
                        <div className="container">
                            <div className="section-title">
                                <h2>Have Any Project? Just <span>Drop A Line</span>. I Always Love To Hear From You</h2>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <ContactForm />
                                </div>

                                <div className="col-lg-5">
                                    <div className="contact-content">
                                        <div className="top">
                                            <ul>
                                                <li>
                                                    <span>Phone:</span>
                                                    <a href="tel:+00932123456">+009 321 23456</a>
                                                </li>
                                                <li>
                                                    <span>Email:</span>
                                                    <a href="mailto:hello@dexia.com">hello@dexia.com</a>
                                                </li>
                                                <li>
                                                    <span>Website:</span>
                                                    <a href="http://dexia.com" target="_blank">www.dexia.com</a>
                                                </li>
                                                <li>
                                                    <span>Address:</span>
                                                    <a href="#">12/7, Mc Street, Canada</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bottom">
                                            <ul>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className='bx bxl-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className='bx bxl-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className='bx bxl-linkedin'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className='bx bxl-behance'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className='bx bxl-dribbble'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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

export default CaseStudyDetails