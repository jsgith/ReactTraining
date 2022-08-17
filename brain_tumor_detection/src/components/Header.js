import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <img src="../../images/logo.png" 
                 className='header--img'/>
            <h1 className='header--title'>Brain Tumor Detection</h1>
        </header>
    )
}