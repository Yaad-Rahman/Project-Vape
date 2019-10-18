import React from 'react';
import './vapeElement.css';

class VapeElement extends React.Component {
    render() {
        return (
            <div id="element">
                <img src="/vapepic.png" width="200px" height="194"  id="vapeimg" />
                <h2 id="pname">Suptor Paad Vape</h2>
                <p id="description">excellent vape with bikot gondho!</p>
                <p id="price">$90.00</p>
            </div>
        );
    };
};

export default VapeElement;