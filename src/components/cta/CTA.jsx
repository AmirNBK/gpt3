import React from 'react';
import './CTA.css'

const CTA = () => {
    return (
        <div className='CTA'>
            <div className='CTA__container'>
                <div className='CTA__container__leftSection'>
                    <h1> Request Early Access to Get Started </h1>
                    <h1> Register today & start exploring the endless possiblities. </h1>
                </div>
                <div className='CTA__container__rightSection'>
                    <button className='CTA__container__rightSection__button'> Get Started </button>
                </div>
            </div>
        </div>
    );
};

export default CTA;