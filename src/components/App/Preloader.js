import React from 'react'

const Preloader = () => {
    return (
        <div className="loader">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="preloader__wrapper">
                        <div className="preloader__circle">
                            <div className="preloader__circle-line preloader__circle-line--1"></div>
                            <div className="preloader__circle-line preloader__circle-line--2"></div>
                            <div className="preloader__circle-line preloader__circle-line--3"></div>
                            <div className="preloader__circle-line preloader__circle-line--4"></div>
                            <div className="preloader__circle-line preloader__circle-line--5"></div>
                            <div className="preloader__circle-line preloader__circle-line--6"></div>
                            <div className="preloader__circle-line preloader__circle-line--7"></div>
                            <div className="preloader__circle-line preloader__circle-line--8"></div>
                            <div className="preloader__circle-line preloader__circle-line--9"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
