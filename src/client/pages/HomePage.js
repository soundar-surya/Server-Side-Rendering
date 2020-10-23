import React from 'react';


const Home = () => {
    return(
        <div>
            I'm the very very BEST home component
            <button onClick={() => console.log('Hi there!')}>press me</button>
        </div>
    );
};

export default {
    component: Home
};