import React, {useRef, useState} from 'react';

const App = () => {

    //const [count, setCount] = useState(0)

    const name = useRef();
    const age = useRef();

    const [user, setUser] = useState({})

    const save = (event) => {
        event.preventDefault(); //- сторінка не оновлюється після кліку на кнопку

        console.log(event.target.name.value); // дані з поля форми
        console.log(event.target.age.value);

    }

    console.log(user);
    const handler = (event) => {
        event.preventDefault();
        setUser(prevState => ({...prevState, [event.target.name]:event.target.value}))
    }



    return (
        <div>
            {/*
            кнопка яка збільшує на оддиницю
            <div>count: {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>inc</button>
            або
            <button onClick={() => setCount(count + 1)}>inc</button>*/}

            <form onSubmit={save}>
                <input type="text" placeholder={'name'} name={'name'} onChange={handler}/>
                <input type="text" placeholder={'age'} name={'age'} onChange={handler}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default App;