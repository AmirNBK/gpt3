import React from 'react';
import './Header.css'
import ai from '../../Assets/ai.png'
import people from '../../Assets/people.png'

const Header = () => {
    return (
        <div className='Header' id='home'>
            <div className='Header__leftSide'>
                <div className='Header__leftSide__title'> Let’s Build Something
                    amazing with GPT-3
                    OpenAI </div>

                <p className='Header__leftSide__description'>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>

                <div className='Header__leftSide__Email'>
                    <input type="email" placeholder='Your Email Address' className='Header__leftSide__Email__input' />
                    <button className='Header__leftSide__Email__button'> Get Started </button>
                </div>

                <div className='Header__leftSide__people'>
                    <div className='Header__leftSide__people__icons'> <img src={people} /> </div>
                    <div className='Header__leftSide__people__description'> 1,600 people requested access a visit in last 24 hours </div>
                </div>

            </div>

            <div className='Header__rightSide'>
                <img src={ai} className='Header__rightSide__ai' />
            </div>
        </div>
    );
};

export default Header;