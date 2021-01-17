import React from 'react'

import review1 from '../../components/App/assets/images/review/review1.jpg'
import review2 from '../../components/App/assets/images/review/review2.jpg'
import review3 from '../../components/App/assets/images/review/review3.jpg'

import Loadable from "@loadable/component"
const OwlCarousel = Loadable(() => import("react-owl-carousel3"))

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
}

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="review-area two four pb-100">
            <div className="container">
                <div className="section-title four">
                    <h2>Some Good <span>Reviews</span> From My Clients Which Always Inspire Me</h2>
                </div>

                {display ? <OwlCarousel 
                    className="review-slider-two owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                        <img src={review1} alt="Review" />
                        <h3>Andrew Smith</h3>
                        <span>Web Developer</span>
                    </div>

                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        <img src={review2} alt="Review" />
                        <h3>Tom Henry</h3>
                        <span>UX/UI Designer</span>
                    </div>

                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                        <img src={review3} alt="Review" />
                        <h3>Jac Jacson</h3>
                        <span>SEO Expert</span>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Testimonials