import React from 'react';
import Topnav from './Topnavbar';
import Htopnav from './Htopnavbar';
import SimpleSlider from './imgslider';
import ElementSlider from './elementSlider';
import ElementSlider2 from './elementSlider2';
import Scroller from './liquids';
import Scroller2 from './vapePods';
import Footer from './footer';
import Signup from './signup';



const App = () => {
    return (
        <div>
             <Topnav/>
             <Htopnav />
             <SimpleSlider />
             <ElementSlider/>
             <ElementSlider2 />
             <Scroller />
             <Scroller2 />
             <Signup />
             <Footer />

             
        
         </div>
    );
};

export default App;
