// // import { useState } from 'react';
// import React from 'react';
// import backgroundImage from '../assets/images/coding screen.avif';

// const divStyle = {
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   height: '100vh',
// };

// const HomePage = () => {
//         return (
//             <div style={divStyle}>
//                 {/* Content of your page goes here */}
//                 <div class="card bg-secondary mb-3" style={
                  
//                 }>
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h4 class="card-title">Secondary card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
//             </div>
//         );
//     }


// export default HomePage;

import React from 'react';

class HomePage extends React.Component {
    render() {
        // Specify the URL of the image
        const imageUrl = "../assets/images/coderLaptop.jpg"

        // Define the style object for the background image
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
                Under Construction
            </div>
        );
    }
}

export default HomePage;
