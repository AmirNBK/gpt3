import React from 'react';
import './Possibility.css'
import image from '../../Assets/possibility.png'

const Possibility = () => {
    return (
        <div className='Possibility'>
            <div className='Possibility__image'>
                <img src={image}/>
            </div>

            <div className='Possibility__content'>
                <h1 className='Possibility__content__firstEarlyAccess'> Request Early Access to Get Started </h1>
                <h1 className='Possibility__content__title'> The possibilities are beyond your imagination </h1>
                <p className='Possibility__content__description'>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <h1 className='Possibility__content__secondEarlyAccess'> Request Early Access to Get Started </h1>
            </div>
        </div>
    );
};

export default Possibility;