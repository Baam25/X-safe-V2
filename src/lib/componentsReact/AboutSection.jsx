import React from 'react';
import './sections.css'

const AboutSection = ({ title, subtitle, description, email, emailText, imageSrc }) => {
    return (
        <section className="objectives-section intro-section">
            <div className="container">
                <div className="row clearfix">
                    {/* Content Column */}

                    <div className="content-inner">
                        <div className="heading-style">
                            <div className="neon-text">{title}</div>
                            <h2 className='x-safe-text'>{subtitle}</h2>
                        </div>
                        <div className="neon-text">{description}</div>
                        <div className="contact-email">
                            {emailText}: <span className="">{email}</span>
                        </div>

                    </div>

                    {/* Image Column */}
                    <div className="image-col">
                        <div className="image-inner">
                            <div className="image-frame">
                                <img src={imageSrc} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
