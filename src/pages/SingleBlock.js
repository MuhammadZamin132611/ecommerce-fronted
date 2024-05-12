import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
const SingleBlock = () => {
    return (
        <div>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className="bolg-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Find By Categories </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/>Go Back to Blogs</Link>
                                <h3 className="title">A Butiful Sunday Morning Renaissance</h3>
                                <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue tortor, viverra mattis diam et, blandit laoreet turpis. Morbi at metus ut erat eleifend cursus vitae sit amet ex. Aenean auctor a ex sed finibus. Vestibulum sapien lacus, sodales vel ultrices quis, convallis sit amet neque. Mauris hendrerit metus dui, porttitor imperdiet arcu pharetra nec. Vestibulum non vestibulum nunc, imperdiet consectetur ligula. Vestibulum tincidunt purus ut suscipit blandit. Mauris at urna sit amet urna tincidunt iaculis. Vivamus sapien lacus, efficitur sit amet efficitur non, pellentesque vulputate enim. Sed egestas velit erat, vitae pellentesque leo semper a. In quis ultrices elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlock;
