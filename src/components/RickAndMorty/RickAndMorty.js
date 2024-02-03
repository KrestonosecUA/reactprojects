import React from 'react';
import './RickAndMorty.css'

const RickAndMorty = ({character}) => {

    const {name, status, species, gender, image} = character;

    return (
        <div className="character-block">
            <img src={image} alt={name} className="character-img"/>
            <div className="character-info">
                <h1 className="character-name">{name}</h1>
                <p className="character-status">Статус: {status}</p>
                <p className="character-species">Раса: {species}</p>
                <p className="character-gender">Стать: {gender}</p>
            </div>

        </div>
    );
};

export default RickAndMorty;