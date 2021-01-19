import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Preloader = () => {
    return (
        <div className="loader">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="preloader__wrapper">
                        <Loader
                            type="ThreeDots"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
