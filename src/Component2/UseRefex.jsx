import React, { useState } from 'react';

const UseRefex = () => {


    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const changeUser = (event) => {
        setUser(event.target.value);
    };

    const changePass = (event) => {
        setPass(event.target.value);
    };

    return (
        <div>
            <h2>Login information</h2>
            <form>
                <label htmlFor="user">Enter username</label>
                <input
                    type="text"
                    name="user"
                    value={user}
                    onChange={changeUser}
                />
                <label htmlFor="pass">Enter password</label>
                <input
                    type="password"
                    name="pass"
                    value={pass}
                    onChange={changePass}
                />
            </form>
            <h2>Users: {user}</h2>
            <h2>Password: {pass}</h2>
        </div>
    );
};

export default UseRefex;