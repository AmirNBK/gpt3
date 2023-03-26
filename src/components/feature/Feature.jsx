import React from 'react';
import FeaturesSectionItem from '../../containers/whatGPT3/featuresSectionItem/FeaturesSectionItem';
import './Feature.css'

const Feature = () => {

    const features = [
        { title: 'Improving end distrusts instantly', description: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' },
        { title: 'Become the tended active', description: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' },
        { title: 'Message or am nothing', description: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' },
        { title: 'Really boy law county', description: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' }
    ]

    return (
        <div className='Feature' id='caseStudy'>
            <div className='Feature__leftSection'>
                <h1 className='Feature__leftSection__description'> The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen. </h1>
                <h1 className='Feature__leftSection__earlyAccess'> Request Early Access to Get Started </h1>
            </div>

            <div className='Feature__rightSection'>
                {features.map((item) => {
                    return (
                        <div className='Feature__rightSection__container'>
                            <FeaturesSectionItem title={item.title} description={item.description} />
                        </div>
                    )
                })}
            </div>


        </div>
    );
};

export default Feature;