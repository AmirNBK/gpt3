import React from 'react';
import FeaturesSectionItem from './featuresSectionItem/FeaturesSectionItem';
import './WhatGPT3.css'

const WhatGPT3 = () => {
    return (
        <div className='WhatGPT3' id='wgpt3'>
            <div className='WhatGPT3__firstColumn'>
                <div className='WhatGPT3__firstColumn__title'>
                    <div className='WhatGPT3__firstColumn__title__line'>  </div>
                    <p>What is GPT-3 </p>
                </div>
                <h1 className='WhatGPT3__firstColumn__description'> We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. </h1>
            </div>

            <div className='WhatGPT3__secondColumn'>

                <h1 className='WhatGPT3__secondColumn__title'> The possibilities are beyond your imagination </h1>

                <h1 className='WhatGPT3__secondColumn__miniTitle'> Explore The Library </h1>
            </div>

            <div className='WhatGPT3__thirdColumn'>
                <FeaturesSectionItem title='Chatbots' description='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
                <div className='WhatGPT3__thirdColumn__middle'>
                    <FeaturesSectionItem title='Knowledgebase' description='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
                </div>
                <FeaturesSectionItem title='Education' description='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
            </div>
        </div>
    );
};

export default WhatGPT3;