import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const navitems = [
    {name: 'How It Works', link: 'working'},
    {name: 'About Us', link: 'aboutus'}
];


const Navbar : React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen((prev) => !prev)
    };

    return (
        <div className = "sticky top-0">      
            <div className = {"absolute flex flex-col bg-gray-300 h-screen w-3/4 " + (isOpen ? "" :"hidden")}>
                <div className = "flex items-center pl-3 space-x-4">
                    <button onClick = {handleMenuToggle} className = "h-6 w-6">
                        <img src = "/assets/cancel.png" alt = "" />
                    </button>
                    <img className = "h-16 w-52" src="/assets/ether-props-logo.svg" alt="" />
                </div>
                {
                    navitems.map((items) => (
                        <ScrollLink key = {items.name} to = {items.link} spy = {true} smooth = {true} className = "ml-7 py-2 cursor-pointer text-white hover:text-gray-800">{items.name}</ScrollLink>
                    ))
                }
                <Link to = "/signin" className = "bg-white ml-6 mt-4 px-3.5 w-20 rounded-2xl text-green-900 py-2 hover:bg-green-400 hover:text-white hover:shadow-2xl">Sign In</Link>
            </div>

            <div className = "flex items-center shadow-lg space-x-4 pl-3 bg-gradient-to-r from-green-500 to-blue-500 sm:hidden">
                <button onClick = {handleMenuToggle} className = "h-6 w-6">
                    <img src = "/assets/menu-icon.svg" alt ="" />
                </button>
                <img className = "h-16 w-52" src = "/assets/ether-props-logo.svg" alt = "" />
            </div>

            <div className = "hidden shadow-lg sm:flex items-center justify-between px-3 bg-gradient-to-r from-green-500 to-blue-500" >
                <img src="/assets/ether-props-logo.svg" alt="" className = "h-20 w-56 ml-3"/>
                <div>
                {
                    navitems.map((items) => (
                        <ScrollLink key = {items.name} to = {items.link} spy = {true} smooth = {true} className = "mx-4 py-4 cursor-pointer text-white hover:text-gray-800">{items.name}</ScrollLink>
                    ))
                }
                <Link to = "/signin" className = "bg-white px-4 rounded-2xl text-green-900 my-2 py-2 ml-2 hover:bg-green-400 hover:text-white hover:shadow-2xl">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;