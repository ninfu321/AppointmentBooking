import React from 'react';
import Header from './Header';
import Top from './Top';
import AboutUS from './AboutUs';
import Reviews from './Reviews';
import Appointment from './Appointment';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { Element } from 'react-scroll';

function App(){


    return <div>
        <Header/>
        <Top/>
        <Element name="aboutus">
                <AboutUS />
            </Element>
            <Element name="reviews">
                <Reviews />
            </Element>
            <Element name="appointment">
                <Appointment />
            </Element>
            <Element name="contactus">
                <ContactUs/>
            </Element>
            <Footer/>

    </div>
}

export default App;