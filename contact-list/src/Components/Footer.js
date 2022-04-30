import React from 'react';
import useStyle from '../App.style';

export default function CpyRight(){
    
    const classes = useStyle();

    return (
        <div className={classes.footer}>
            Copyright © 2022 Application All Rights Reserved.
        </div>
    )
}