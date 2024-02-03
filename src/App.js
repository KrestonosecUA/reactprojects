import React from 'react';
import Simpsons from "./components/Simpsons/Simpsons";
import './App.css';
import RickAndMorties from "./components/RickAndMorty/RickAndMorties";

const App = () => {
    return (
        <div className="main">
            <h1 className="main-title">Information about cartoon characters </h1>
            <Simpsons/>
            <RickAndMorties/>
        </div>
    );
};

export default App;