import React from 'react';
import About from '../components/home/About';
import Navbar from '../components/home/Navbar';
import Working from '../components/home/Working';
import Intro from '../components/home/Intro';

const Home : React.FC = () => {
    return (
        <div className = "flex flex-col w-full bg-gray-200">
            <Navbar />
            <Intro />
            <Working />
            <About />
        </div>
    );
};

export default Home;
