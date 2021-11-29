import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Experiencs from '../Experiecs/Experiencs';
import Projects from '../Projects/Projects';

const backgroundColor = {
    backgroundColor: '#EFEFEF'
}


const Home = () => {
    return (
        <div>
            <div style={backgroundColor}>
                <Navigation></Navigation>
                <Banner></Banner>
            </div>
            <Experiencs></Experiencs>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;