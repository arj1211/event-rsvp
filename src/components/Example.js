import React from 'react';
import 'bulma/css/bulma.min.css';
import largeImage from '../assets/large-image.jpg';

const LandingPage = () => {
    return (
        <div className="columns">
            <div className="column is-half">
                {/* Left column content */}
                <section className="section">
                    <img src={largeImage} alt="Large Image" />
                </section>
            </div>
            <div className="column is-half" style={{ position: 'relative' }}>
                {/* Right column content */}
                <section className="section" style={{ position: 'absolute', top: '25%' }}>
                    <h2 className="title">Features</h2>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;
