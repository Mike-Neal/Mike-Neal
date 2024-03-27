// import { useState } from 'react';
import React from 'react';

class HomePage extends React.Component {
    render() {
        const imageUrl = "./images/coderCoding.jpg"

        const backgroundStyle = {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
        }

        return (
            <div style={backgroundStyle}>
                {/* Content of your page goes here */}
                
            </div>
        );
    }
}

export default HomePage;
