import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-item">
                        <p>&copy;{currentYear} Design & Developed by <a href="https://hibootstrap.com/" target="_blank" rel="noreferrer">HiBootstrap</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer