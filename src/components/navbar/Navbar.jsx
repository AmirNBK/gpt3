import React from 'react';
import './Navbar.css'
import logo from '../../Assets/logo.svg'

const Navbar = () => {

    const linkItems = ['Home', 'What is GPT?', 'Open AI', 'Case Studies', 'Library']
    return (
        <div className='Navbar'>
            <div className='Navbar__links'>
                <img src={logo} className='Navbar__links__logo' />
                {linkItems.map((item) => {
                    return (
                        <div className='Navbar__links__items'>
                            {item}
                        </div>
                    )
                })}
            </div>

            <div className='Navbar__sign'>
                <div className='Navbar__sign__signIn'> Sign in </div>
                <button className='Navbar__sign__signUp'> Sign up </button>
            </div>
        </div>
    );
};

export default Navbar;