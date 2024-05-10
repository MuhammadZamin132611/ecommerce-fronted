import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <>
            <div className="col-3">
                <div className="blog-card">
                    <div className="card-img">
                        <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
                    </div>
                    <div className="blog-content">
                        <p className="date">1 Dec 2022</p>
                        <h5 className="title">A beautiful sunday morning renaissance</h5>
                        <p className="desc"> I can be a React component, multiple React components, or just some text.</p>
                        <Link to='' className='button'>Read Mode</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogCard;
