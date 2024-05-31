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
        <div className='bg-danger'>
            <h2>Login information</h2>
            <form>
                <label className='fs-4' htmlFor="user">Enter username</label>
                <input className='bg-secondary-subtle rounded'
                    type="text"
                    name="user"
                    value={user}
                    onChange={changeUser}
                />
                <label className='fs-4' htmlFor="pass">Enter password</label>
                <input className='bg-secondary-subtle rounded'
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