import React from 'react';
import './FeaturesSectionItem.css'

const FeaturesSectionItem = (props) => {
    return (
        <div className='FeaturesSectionItem'>
            <div className='FeaturesSectionItem__line'>  </div>
            <div className='FeaturesSectionItem__content'>
                <div className='FeaturesSectionItem__content__title'>
                    <h1 className='FeaturesSectionItem__content__title__text'> {props.title} </h1>
                </div>
                <p className='FeaturesSectionItem__content__description'> {props.description} </p>
            </div>
        </div>
    );
};

export default FeaturesSectionItem;