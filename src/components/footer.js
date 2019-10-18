import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div id="view">View More</div>
            <div id="footer">
                <h2 id="stay">Stay Connected</h2>
                <img id="facebook" src="/facbookicon.png" />
                <img id="youtube" src="/youtubeicon.png" />
                <h2 id="download">Download Our App</h2>
                <img id="google" src="/googleplay.png" />
                <img id="apple" src="/applestore.png" />
                <h2 id="contact">Contact Us</h2> 
                <p id="address">ATMC Gaming Association
                Galib's Home -1207
                Dhaka Real Estate, 
                Mohammadpur.
                </p>
            </div>
            </div>
        );
    };
};

export default Footer;