import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../Assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const linkItems = ['Home', 'What is GPT?', 'Open AI', 'Case Studies', 'Library']

    if (window.innerWidth < 700) {
        linkItems.push('Sign in', 'Sign up')
    }

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
                <div className='Navbar__sign__menu'>
                    {toggle ? <RiCloseLine onClick={() => { setToggle(false) }} size={27} /> :
                        <RiMenu3Line onClick={() => { setToggle(true) }} size={27} />}
                </div>
                {toggle &&
                    <div className='Navbar__sign__menu__container scale-up-center'>
                        {linkItems.map((item) => {
                            return (
                                <div className='Navbar__sign__menu__container__items'>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;