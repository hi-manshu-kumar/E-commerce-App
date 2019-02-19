import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    WAVES
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact Information</h2>
                        <div className="business_info">
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="info">
                                    <div>Address</div>
                                    <div>Kramer 1244</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;