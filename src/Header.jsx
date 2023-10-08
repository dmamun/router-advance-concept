import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    return (
        <div className='flex justify-between'>
            <Logo></Logo>
            <div className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/favorite">Favorite</Link>
            <Link to="/login">Login</Link>

            </div>
            
            
        </div>
    );
};

export default Header;