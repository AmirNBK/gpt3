import React from 'react';
import './Blog.css'
import BlogComponent from './blogComponent/BlogComponent';
import image1 from '../../Assets/blog01.png'
import image2 from '../../Assets/BlogImage1.png'
import image3 from '../../Assets/BlogImage2.png'
import image4 from '../../Assets/BlogImage3.png'
import image5 from '../../Assets/BlogImage4.png'

const Blog = () => {
    return (
        <div className='Blog'>
            <div className='Blog__title'>
                A lot is happening,
                We are blogging about it.
            </div>
            <div className='Blog__container'>
                <div>
                    <BlogComponent image={image1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div className='Blog__container__groupB'>
                    <BlogComponent image={image2} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <BlogComponent image={image3} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <BlogComponent image={image4} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <BlogComponent image={image5} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
            </div>

        </div>
    );
};

export default Blog;