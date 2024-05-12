import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Signup = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <div className="login-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card shadow">
                                <h3 className='text-center mb-3'>Sign Up</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div className='mt-1'>
                                        <input type="text" className='form-control' name="name" placeholder='Name' />
                                    </div>
                                    <div className='mt-1'>
                                        <input type="tel" className='form-control' name="mobile" placeholder='Mobile Number' />
                                    </div>
                                    <div className='mt-1'>
                                        <input type="email" className='form-control' name="email" placeholder='Email' />
                                    </div>
                                    <div className='mt-1'>
                                        <input type="password" className='form-control' name="password" placeholder='Password' />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                            <button className='button border-0' type='submit'>Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
