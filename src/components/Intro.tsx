import React from 'react';

const Intro : React.FC = () => {
    return (
        <div className = "grid grid-col-1 h-screen bg-gradient-to-r from-green-500 to-blue-500 border-b rounded-b-2xl">
            <div className = "place-self-center"><h1 className = "text-5xl text-white font-extralight">Ether Props</h1></div>
        </div>

    );
};

export default Intro;