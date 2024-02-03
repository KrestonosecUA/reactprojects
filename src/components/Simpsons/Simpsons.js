import React from 'react';
import Simpson from "./Simpson";
import './Simpsons.css';

const Simpsons = () => {

    const simpsons = [
        {
            id: 1,
            name: 'Гомер Сімпсон',
            age: 39,
            img: 'https://i.pinimg.com/736x/77/5f/33/775f337a4afd8cbc83a20b5b5d66ee01.jpg',
            description: 'Гомер — милий та кумедний, проте іноді грубий і неввічливий батько родини. Він має очевидні вади: ' +
                'товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, ' +
                'але все ж лишається симпатичним.'
        },
        {
            id: 2,
            name: 'Мардж Сімпсон',
            age: 34,
            img: 'https://toleranten.files.wordpress.com/2011/03/original.jpg',
            description: 'Марджорі —  дружина Гомера Сімпсона, ' +
                'мати Ліси та Барта. Домогосподарка, майже весь свій час проводить удома доглядаючи наймолодшу дитину Меґґі, ' +
                'а також Барта, Лісу і чоловіка.'
        },
        {
            id: 3,
            name: 'Барт Сімпсон',
            age: 10,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdi_KTETUp4seiSoJLQyE79l4OCfvBmAjwk1BeNouV1w&s',
            description: 'Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. ' +
                'Барт є втіленням образу бешкетника та посереднього учня у школі. '
        },
        {
            id: 4,
            name: 'Ліса Сімпсон',
            age: 8,
            img: 'https://citaty.info/files/characters/638.png',
            description: 'Ліса — надзвичайно розумна восьмирічна дівчинка, один з найрозумніших у серіалі. Феміністка. Грає на саксофоні.'
        },
        {
            id: 5,
            name: 'Меггі Сімпсон',
            age: 1,
            img: 'https://pikuli.top/uploads/posts/2023-03/1679404258_art-oir-mobi-p-meggi-iz-simpsonov-art-vkontakte-3.jpg',
            description: 'Меґґі» Сімпсон —  найменша дочка Гомера Сімпсона та Мардж Сімпсон. Протягом усіх років серіалу Меґґі ' +
                'не росте і завжди залишається немовлям у повзунках та підгузнику. Попри свій вік Меґґі потрапляє в різні пригоди ' +
                'разом зі своїм братом Бартом та сестрою Лісою.'
        },
    ]

    return (
        <div className="simpson-blocks">
            <h1 className="simpson-blocks-title">SIMPSONS</h1>
            {
                simpsons.map(simpson=><Simpson simpson={simpson} key={simpson.id}/>)
            }

        </div>
    );
};

export default Simpsons;