import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
const Forgotpassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className="login-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card shadow">
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <p className='text-center mt-2 mb-3'>We wil send you an email to reset your password</p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type="email" className='form-control' name="email" placeholder='Email' />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex flex-column justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Submit</button>
                                            <Link to='/login' >Cancel</Link>
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

export default Forgotpassword;
