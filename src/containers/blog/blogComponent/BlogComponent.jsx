import React from 'react';
import './BlogComponent.css'

const BlogComponent = (props) => {
    const image = props.image
    const date = props.date
    const title = props.title
    return (
        <div className='BlogComponent'>
            <div className='BlogComponent__upperSide'>
                <div>
                    <img src={image} className='BlogComponent__upperSide__image' />
                </div>
                <h1 className='BlogComponent__upperSide__date'> {date} </h1>
                <h1 className='BlogComponent__upperSide__title'> {title} </h1>
            </div>
            <div className='BlogComponent__downSide'>
                <h1 className='BlogComponent__downSide__article'> Read Full Article </h1>
            </div>
        </div>
    );
};

export default BlogComponent;
