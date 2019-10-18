import React from 'react';
import './Topnavbar.css';
import Signup from './signup';
import Login from './login';








class Topnav extends React.Component {
    render() {
        return (
            <div id="back">
                <img src="/logopro.png" id="logo" />
                <h2 id="cname">Vape Shop</h2>
                <input type="text" name="searchbox"  id="search"/>
                <img src="/searchlogo.png"  id="searchlogo" />
                <img src="/shoppingcart.png" id="cart" />
                <img src="/accountlogo.png" id="account" />
                <h2 id="login"><Login/> </h2>
                <h2 id="signup"><Signup/> </h2>


            </div>
        );
    };
};


export default Topnav;