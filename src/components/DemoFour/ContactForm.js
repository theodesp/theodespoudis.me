import React, { useState } from 'react'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import { useForm } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import {graphql, useStaticQuery} from "gatsby";
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        social {
                            twitter
                            github
                            linkedin
                        }
                    }
                }
            }
        `
    )
    const social = site?.siteMetadata?.social;

    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }
    
    return (
        <div id="contact" className="contact-area four pb-70 mt-50">
            <div className="container">
                <div className="section-title four">
                    <h2>Have You Any <span>Project</span> In Mind? Drop Me A Line Here</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-7">
                        <form className="js-contact-form" name="contact" method="POST" data-netlify="true">
                            <p className="invisible" hidden>
                                <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="form-control" 
                                            placeholder="Name*"
                                            required={true}
                                            value={contact.name}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.name && 'Name is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="email"
                                            name="email"
                                            required={true}
                                            className="form-control" 
                                            placeholder="Email*"
                                            value={contact.email}
                                            onChange={handleChange}
                                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.email && 'Email is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            className="form-control" 
                                            placeholder="Subject*"
                                            required={true}
                                            value={contact.subject}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.subject && 'Subject is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="number" 
                                            className="form-control" 
                                            placeholder="Phone"
                                            value={contact.number}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea 
                                            name="text"
                                            className="form-control" 
                                            cols="30" 
                                            rows="6" 
                                            placeholder="Write message*"
                                            value={contact.text}
                                            onChange={handleChange}
                                            required={true}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{display: 'block'}}>
                                            {errors.text && 'Text body is required.'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <button type="submit" className="btn common-btn four">Send Message <span></span></button>
                        </form>
                    </div>

                    <div className="col-md-5 col-lg-5">
                        <div className="contact-content">
                            <div className="top">
                                <ul>
                                    <li>
                                        <b>Website:</b>{' '}
                                        <a href="https://theodespoudis.netlify.app/" target="_blank">www.theodespoudis.me</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="bottom">
                                <b>Social:</b> {' '}
                                <ul>
                                    <li>
                                        <a href={social.twitter}>
                                            <i className='bx bxl-twitter' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={social.linkedin}>
                                            <i className='bx bxl-linkedin' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={social.github}>
                                            <i className='bx bxl-github' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm