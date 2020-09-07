import React from 'react';
import peachTreeLogo from '../utilities/peachTreeLoog.png';

const Header = () => {
    return (
        <div className='page-header'>
            <div className='container'>
                <h1><img src={peachTreeLogo} alt="peachTreeLogo"></img>Peachtree Bank</h1>
            </div>
        </div>
    );
};

export default Header;