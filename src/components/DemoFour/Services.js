import React from 'react';
import writingIcon from '../App/assets/icons/writing.svg';
import codingIcon from '../App/assets/icons/coding.svg';
import conceptIcon from '../App/assets/icons/concept.svg';
import interviewIcon from '../App/assets/icons/interview.svg';
import mentoringIcon from '../App/assets/icons/mentoring.svg';
import reviewingIcon from '../App/assets/icons/reviewing.svg';

const Services = () => {
    return (
        <div className="what-area border-bottom pt-100 pb-70" id="services">
            <div className="common-right-text">
                <span>SERVICES</span>
            </div>

            <div className="container">
                <div className="section-title">
                    <span className="sub-title">WHAT I CAN DO FOR YOU</span>
                    <h2>Here Are My Specialties</h2>
                    <p>I have extensive commercial experience both in development and in training.</p>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <img src={mentoringIcon} alt="Mentoring Icon" className="icon"/>
                            <h3>
                                Mentoring
                            </h3>
                            <p>Teaching you or your team to get them up to speed with the latest web technologies such as React, Go, Typescript</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <img src={interviewIcon} alt="Interview Icon" className="icon"/>
                            <h3>
                                Interview Preparation and Technical Training
                            </h3>
                            <p>I can help you succeed in your next Technical Task and Interview process.
                                I can review your CV and help you with assignments. I can give you the right knowledge to ace technical white-boarding questions</p>

                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <img src={writingIcon} alt="Writing Icon" className="icon"/>
                            <h3>
                                Technical Writing
                            </h3>
                            <p>I have written dozens of tutorials and produced technical material that had collected thousands of visits from Hacker News and other sites.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <img src={reviewingIcon} alt="Code Reviewing Icon" className="icon"/>
                            <h3>
                                Code Reviewing
                            </h3>
                            <p>I have extensive experience with reviewing code and have participated in thousands of code reviews.
                                I can give constructive feedback on how to improve the codebase.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <img src={conceptIcon} alt="Concept and MVP Development Icon" className="icon"/>
                            <h3>
                                Concept and MVP Development
                            </h3>
                            <p> I can research, propose and prepare new projects from scratch into a working product that you can use to bootstrap your business idea.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <img src={codingIcon} alt="Writing Code Icon" className="icon"/>
                            <h3>
                                Writing Code
                            </h3>
                            <p>I have extensive experience in developing large scale applications both in the frontend and the backend.
                                I can work along your team or independently delivering new features for your customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;