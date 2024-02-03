import React from 'react';
import './Simpsons.css';

const Simpson = ({simpson}) => {

    const {name, age, img, description} = simpson;

    return (
            <div className="simpson-block">
                <h1 className="simpson-title">{name}</h1>
                <p className="simpson-age">Вік: {age}</p>
                <div className="simpson-info">
                    <img src={img} alt={name} className="simpson-img"/>
                    <div className="simpson-description">{description}</div>
                </div>
            </div>
    );
};

export default Simpson;