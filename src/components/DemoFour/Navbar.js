import React from 'react';
import {Link} from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../components/App/assets/images/logo.png';

const Navbar = () => {
    const [collapsed, setCollapsed] = React.useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <nav id="navbar" className="navbar navbar-expand-md navbar-light four fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img width={150} src={logo} alt="logo" />
                    </Link>

                    <button 
                        onClick={toggleNavbar}
                        className={classTwo} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="icon-bar top-bar"/>
                        <span className="icon-bar middle-bar" />
                        <span className="icon-bar bottom-bar" />
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <AnchorLink
                                    offset={() => 100} 
                                    className="nav-link active" 
                                    href="#home"
                                >
                                    Home
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#about"
                                >
                                    About
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#services"
                                >
                                    Services
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#blog"
                                >
                                    Blog
                                </AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink
                                    offset={() => -1} 
                                    className="nav-link" 
                                    href="#contact"
                                >
                                    Contact
                                </AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar