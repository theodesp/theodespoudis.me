import React from 'react'
import { Link } from 'gatsby'

const MainBanner = () => {
    return (
        <div id="home" className="banner-area four">

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <span className="sub-head"></span>
                            <h1>Theo Despoudis</h1>
                            <p>Hello I am a <span>Software Engineer</span> from Ireland. I have rich experience in React.js, Typescript and Go</p>
                            
                            <div className="banner-btn-area">
                                <Link to="#contact" className="common-btn">
                                    Contact Me
                                </Link>
                                <Link href="#" className="common-btn banner-btn">
                                    Hire Me
                                </Link>
                            </div>

                            <ul>
                                <li>
                                    <a href="#">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className='bx bxl-behance'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className='bx bxl-dribbble'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner