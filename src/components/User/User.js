import React from 'react';

const User = ({user, getCurrentUser}) => {

    const {id, name} = user;



    return (
        <div>
            <div>Id {id}</div>
            <div>name {name}</div>
            <button onClick={() => getCurrentUser(user)}>Details</button>
        </div>
    );
};

export default User;