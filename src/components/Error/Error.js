import React from 'react'; 
import classes from './Error.module.css' 
const Error = () => {
    return (
        <div className={classes.error}>
            <h3>there was an Error...</h3>
        </div>
    );
};

export default Error;