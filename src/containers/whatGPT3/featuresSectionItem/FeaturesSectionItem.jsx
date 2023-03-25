import React from 'react';
import './FeaturesSectionItem.css'

const FeaturesSectionItem = (props) => {
    return (
        <div className='FeaturesSectionItem'>
            <div className='FeaturesSectionItem__title'>
                <div className='FeaturesSectionItem__title__line'>  </div>
                <h1 className='FeaturesSectionItem__title__text'> {props.title} </h1>
            </div>
            <p className='FeaturesSectionItem__description'> {props.description} </p>
        </div>
    );
};

export default FeaturesSectionItem;