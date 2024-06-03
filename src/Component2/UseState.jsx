import React, { useState } from 'react';

const UseState = () => {
    const [userInfo, setUserInfo] = useState({ name: "KIET", class: "mca" });
    const [counter, setCounter] = useState(0);

    const changeName = () => {
        setUserInfo({ ...userInfo, name: "KIET MCA" });
        console.log(userInfo.name);
    };

    return (
        <div className='bg-primary-subtle'>
            <h1 className='text-center'>Name: {userInfo.name}</h1>
            <h1 className='text-center'>Class: {userInfo.class}</h1>
            <div className='text-center'>
            <button className="btn btn-primary " onClick={changeName}>Change Name</button>
            </div>
            <h2 className='text-center'>Counter: {counter}</h2>
            <div className='text-center'>
            <button className="btn btn-primary"
                onClick={() => {
                    setCounter((prevCounter) => prevCounter + 1);
                    setCounter((prevCounter) => prevCounter + 1);
                    setCounter((prevCounter) => prevCounter + 1);
                }}
            >
                Increment Counter +3
            </button>
            </div>
        </div>
    );
}
//
export default UseState;
