import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useFormik } from 'formik';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from;

    const HandelSignInGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: value => {
            console.log("data :", value)
        }
    })


    return (
        <div >
            <h2>Please Login</h2>
            <div className="login_container">
                <Form className='login' onSubmit={formik.handleSubmit}>
                    <label className='p-2 ' htmlFor='email'>Email</label>
                    <input type="email" name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
                    <br />
                    <label className='p-2 ' htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' onChange={formik.handleChange} value={formik.values.password} />
                    <br />

                    <button className='btn btn-primary my-3' type="submit">Submit</button><br />
                    <small>New in Genius Car ? <Link to='/register'>Register</Link></small>
                </Form>
            </div>



            <Button onClick={HandelSignInGoogle} className='btn btn-warning'>Sign in with google</Button>
        </div>
    );
};

export default Login;