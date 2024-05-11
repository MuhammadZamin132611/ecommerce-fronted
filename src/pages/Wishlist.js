import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <div className="wishlist-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="sdfg" className="position-absolute cross img-fluid" />
                                <div className="wishlish-card-image position-relativ">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='p-3'>
                                    <h5 className="title mb-3 mt-3">Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="sdfg" className="position-absolute cross img-fluid" />
                                <div className="wishlish-card-image position-relativ">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='p-3'>
                                    <h5 className="title mb-3 mt-3">Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="sdfg" className="position-absolute cross img-fluid" />
                                <div className="wishlish-card-image position-relativ">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='p-3'>
                                    <h5 className="title mb-3 mt-3">Honor T1 7.0 1GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;
