import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

const navitems = [
    {name: 'How It Works', link: 'working'},
    {name: 'About Us', link: 'aboutus'}
];


const Navbar : React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen((prev) => !prev)
    };

    const props = useSpring({
        opacity: isOpen ? 1 : 0
    });

    return (
        <div className = "sticky top-0">      
            <animated.div style = {{opacity : props.opacity}} className = {"absolute flex flex-col bg-gray-200 h-screen w-full " + ( isOpen ? "" : " hidden")}>
                
                <button onClick = {handleMenuToggle} className = "h-6 w-6 mt-5 ml-auto mr-4">
                    <img src = "/assets/cancel.png" alt = "" />
                </button>
                
                <div className = "flex flex-col my-auto">
                    {
                        navitems.map((items) => (
                            <ScrollLink onClick = {handleMenuToggle} key = {items.name} to = {items.link} spy = {true} smooth = {true} className = "mx-auto py-2 cursor-pointer text-gray-700 hover:text-gray-800">{items.name}</ScrollLink>
                        ))
                    }
                <Link to = "/signin" className = "bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 px-3.5 w-20 rounded-2xl text-white py-2 hover:bg-green-400 hover:text-white hover:shadow-2xl">Sign In</Link>
                </div>
            </animated.div>

            <div className = "flex items-center shadow-lg space-x-4 pl-3 bg-gradient-to-r from-blue-300 to-blue-500 sm:hidden">
                <button onClick = {handleMenuToggle} className = {"h-6 w-6 "}>
                    {!isOpen && <img src = "/assets/menu-icon.svg" alt ="" />}
                </button>
                <img className = "h-16 w-52" src = "/assets/ether-props-logo.svg" alt = "" />
            </div>

            <div className = "hidden shadow-lg sm:flex items-center justify-between px-3 bg-gradient-to-r from-blue-300 to-blue-500" >
                <img src="/assets/ether-props-logo.svg" alt="" className = "h-20 w-56 ml-3"/>
                <div>
                {
                    navitems.map((items) => (
                        <ScrollLink key = {items.name} to = {items.link} spy = {true} smooth = {true} className = "mx-4 py-4 cursor-pointer text-white hover:text-gray-800">{items.name}</ScrollLink>
                    ))
                }
                <Link to = "/auth" className = "bg-white px-4 rounded-2xl text-green-900 my-2 py-2 ml-2 hover:bg-green-400 hover:text-white hover:shadow-2xl">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;