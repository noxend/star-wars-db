import React from 'react';
import { CircularProgress } from '@material-ui/core';

import './loader-v2.css';

const LoaderV2 = () => {

    return(
        <div className='loader-v2'>
            <CircularProgress size={70} style={{color: '#158CBA'}} />
        </div>
    );
}

export default LoaderV2;
