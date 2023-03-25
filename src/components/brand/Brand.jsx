import React from 'react';
import './Brand.css'
import google from '../../Assets/google.png'
import slack from '../../Assets/slack.png'
import atlassian from '../../Assets/atlassian.png'
import dropbox from '../../Assets/dropbox.png'
import shopify from '../../Assets/shopify.png'

const Brand = () => {
    const iconItems = [slack, shopify, google, dropbox, atlassian]
    return (
        <div className='Brand'>
            {iconItems.map((item) => {
                return (
                    <img src={item} className='Brand__item' />
                )
            })}
        </div>
    );
};

export default Brand;