import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Register = () => {

    const { error, createUserWithEmail, signInWithGoogle } = useAuth();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleRegistration = event => {
        event.preventDefault()
       createUserWithEmail(email,password)
        
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePassWordChange = event => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <Header></Header>
            <h2 className="my-5">Please Register</h2>

            <section className="vh-100 mt-5 pt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"alt=""/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleRegistration} >
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button onClick={signInWithGoogle} type="button" className="btn btn-primary btn-floating mx-1">
                                    Google
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input onBlur={handleEmailChange} type="email" id="form3Example3" className="form-control form-control-lg"
                                placeholder="Your Email" />
                            </div>

                                {/* Password input */}
                            <div className="form-outline mb-3">
                                <input onBlur={handlePassWordChange} type="password" id="form3Example4" className="form-control form-control-lg"
                                placeholder="Your Password" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <span className="text-danger">{error}</span>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <input className="btn btn-primary" type="submit" value="Register" />
                                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account ? <Link to="/login" href="#!"
                                    className="link-danger">Login</Link></p>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>


            <Footer></Footer>
        </div>
    );
};

export default Register;