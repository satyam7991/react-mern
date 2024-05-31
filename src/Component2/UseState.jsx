import React, { useState } from 'react';

const UseState = () => {
    const [userInfo, setUserInfo] = useState({ name: "KIET", class: "mca" });
    const [counter, setCounter] = useState(0);

    const changeName = () => {
        setUserInfo({ ...userInfo, name: "KIET MCA" });
        console.log(userInfo.name);
    };

    return (
        <div>
            <h1>Name: {userInfo.name}</h1>
            <h1>Class: {userInfo.class}</h1>
            <button className="btn btn-primary" onClick={changeName}>Change Name</button>
            <h2>Counter: {counter}</h2>
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
    );
}

export default UseState;
