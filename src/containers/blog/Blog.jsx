import React from 'react';
import './Blog.css'
import BlogComponent from './blogComponent/BlogComponent';
import image from '../../Assets/blog01.png'

const Blog = () => {
    return (
        <div className='Blog'>
            <div className='Blog__title'>
                A lot is happening,
                We are blogging about it.
            </div>
            <div className='Blog__container'>
                <div>
                    <BlogComponent image={image} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div>
                    <BlogComponent image={image} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <BlogComponent image={image} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div>
                    <BlogComponent image={image} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <BlogComponent image={image} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
            </div>

        </div>
    );
};

export default Blog;