import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <div className="login-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card shadow">
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div className='mt-1'>
                                        <input type="passeord" className='form-control' name="password" placeholder='Password' />
                                    </div>
                                    <div className='mt-1'>
                                        <input type="password" className='form-control' name="confpassword" placeholder='Confirm Password' />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                            <button className='button border-0' type='submit'>Ok</button>
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

export default ResetPassword;
