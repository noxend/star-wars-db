import React from 'react';

const Row = ({ left, rigth }) => {
    return (
        <div className='person-page container mt-3'>
            <div className='row px-3'>
                { left }
                { rigth }
            </div>
        </div>
    );
}

export default Row;