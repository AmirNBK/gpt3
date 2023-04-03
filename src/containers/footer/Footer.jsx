import React from 'react';
import './Footer.css'
import logo from '../../Assets/logo.svg'

const Footer = () => {
    const firstFooterOptions = ['Links' , 'Overons' , 'Social Media' , 'Counters' , 'Counters']
    const secondFooterOptions = ['Company' , 'Terms & Conditions' , 'Privacy Policy' , 'Contact']
    const thirdFooterOptions = ['Get in touch' , 'Crechterwoord K12 182 DK Alknjkcb' , '085-132567' , 'info@payme.net']

    return (
        <div className='Footer'>
            <div className='Footer__upperSection'>
                 <h1> Do you want to step in to the future before others </h1>
                 <button> Request Early Access </button>
            </div>

            <div className='Footer__bottomSection'>
                <div className='Footer__bottomSection__logoSection'>
                    <img src={logo}/>
                    <h1> Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved </h1>
                </div>
                <div className='Footer__bottomSection__firstOptions'>
                    {firstFooterOptions.map((item) => {
                        return (
                            <h1> {item} </h1>
                        )
                    })}
                </div>
                <div className='Footer__bottomSection__secondOptions'>
                    {secondFooterOptions.map((item) => {
                        return (
                            <h1> {item} </h1>
                        )
                    })}
                </div>
                <div>
                <div className='Footer__bottomSection__thirdOptions'>
                    {thirdFooterOptions.map((item) => {
                        return (
                            <h1> {item} </h1>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;