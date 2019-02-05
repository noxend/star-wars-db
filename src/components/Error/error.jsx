import React from 'react';
import './error.css';

const Error = () => {
    return(
        <div className='mx-auto'>
            <h1 className='text-center'>OOPS!</h1>
            <p className='text-center'>Failed load data from server</p>
        </div>
    );
}

export default Error;
