import React from 'react';
import Character from "./components/Character";

const App = () => {

    const characters = [
        {
            id:1,
            name: 'Морті Сміт',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQbHXC-1E52hQ8hGB-a6z3BkBUi4e6ZgtYaKTzdh8Ig&s'
        },
        {
            id:2,
            name: 'Рік Санчес',
            img: 'https://i.movielib.ru/charpic/1584043/l/4ef3/Rik_Sanchez.jpg'
        },
        {
            id:3,
            name: 'Саммер Сміт',
            img: 'https://pbs.twimg.com/media/E4U5WUUXEAEg0-g.jpg'
        },
        {
            id:4,
            name: 'Джеррі Сміт',
            img: 'https://pm1.aminoapps.com/6557/cbc31aeca84e49aeecb1dbc77a194241d30df456_00.jpg'
        }
    ]

    return (
        <div>
            {
                characters.map(character=><Character character={character} key={character.id}/>)
            }

        </div>
    );
};

export default App;