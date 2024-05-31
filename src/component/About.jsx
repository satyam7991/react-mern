import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home'); 
    };

    return (
        <div>
            <h1 className='bg-primary-subtle'>THIS IS AN EXAMPLE OF ROUTE DOM</h1>
            <div className='bg-primary-subtle'>
            <button className="btn btn-success" onClick={goHome}>
            Home
            </button>
            </div>
        </div>
    );
};


export default About;