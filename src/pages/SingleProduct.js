import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';

const SingleProduct = () => {
    const props = { width: 400, height: 500, zoomWidth: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" };

    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log("text", text)
        var textField = document.createElement('textarea');
        textField.innerHTML = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    }
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image rounded">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className='img-fluid' alt="watch" /></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details shadow">
                                <div className='border-bottom'>
                                    <h3 className='title'>Kids Headphone Bulk 10 Pack Multi Colored For Students</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 review-btn'>(2 Reviews)</p>
                                    </div>
                                    <a className='review-btn' href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom">
                                    <div className='d-flex gap-10 align-items-center my-4'>
                                        <h3 className='product-heading'>Type: </h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-4'>
                                        <h3 className='product-heading'>Brand: </h3>
                                        <p className='product-data'>Havels</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-4'>
                                        <h3 className='product-heading'>Category: </h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-4'>
                                        <h3 className='product-heading'>Tags: </h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-4'>
                                        <h3 className='product-heading'>Avalibility: </h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-4'>
                                        <h3 className='product-heading'>Size: </h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge  text-bg-white text-dark border border-1 border-secondary'>S</span>
                                            <span className='badge text-bg-white text-dark border border-1 border-secondary'>M</span>
                                            <span className='badge text-bg-white text-dark border border-1 border-secondary'>XL</span>
                                            <span className='badge text-bg-white text-dark border border-1 border-secondary'>XXL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-4'>
                                        <h3 className='product-heading'>Color: </h3>
                                        <Colors />
                                    </div>
                                    <div className='d-flex align-items-center gap-15 flex-row my-4'>
                                        <h3 className='product-heading'>Quantity: </h3>
                                        <div className=''>
                                            <input type="number" style={{ "width": "70px" }} min={1} max={10} className='form-control' name="" id="" />
                                        </div>
                                        <div>
                                            <div className='d-flex gap-30 align-items-center ms-5'>
                                                <button className='button border-0' type='submit'>Add to Cart</button>
                                                <button className='button signup border-0'>Buy It Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-30'>
                                        <div>
                                            <a href=""><TbGitCompare className='fs-5 me-2' />Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><AiOutlineHeart className='fs-5 me-2' />Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-4'>
                                        <h3 className='product-heading'>Shipping & Returns: </h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Shipping & Returns
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Copy Product Link
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body" onClick={() => { copyToClipboard('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg') }}>Copy Product link</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper pb-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id='review' className="reviews-wrapper pb-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10 '>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4 className='mb-2'>Write a Reviews</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" className='form-control' cols="30" rows="4" id="" placeholder='Comments'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0' type='submit'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="rewies">
                                    <div className="review mt-4">
                                        <div className="d-flex gap-10 align-items-center ">
                                            <h6 className='mb-0'>Zamin</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper pb-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingleProduct;
