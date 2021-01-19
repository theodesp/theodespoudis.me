import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <div className="copyright-area four">
                <div className="container">
                    <div className="copyright-item">
                        <p>{currentYear} Powered by <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer