import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const { login, loginwithgoogle } = useContext(AuthContext);
  const [error, setError] = useState(null); // State to handle login errors

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  // Function to handle standard email/password login
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await login(email, password);
      const user = userCredential.user;
      alert('Login Successfully');
      navigate(from, { replace: true });
    } catch (error) {
      setError('Email or Password is not correct');
      console.log(error);
    }
  };

  // Function to handle Google login
  const handleRegister = () => {
    loginwithgoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        alert('Sign up Successfully');
      })
      .catch((error) => {
        setError('Google login failed');
        console.log(error);
      });
  };

  return (
    <>
      <br />
      <section className="pb-4" style={{ border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <div className="bg-white">
          {/* Login Title */}
          <h2 style={{ textAlign: 'center', margin: '0px 20px', padding: '0.6em 0px', fontWeight: 'bolder' }}>
            Login
          </h2>

          {/* Login Form */}
          <section className="w-100 p-4 d-flex justify-content-center pb-4">
            <form onSubmit={handleLogin} style={{ width: '100%' }}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">Email address</label>
                <input type="email" id="form2Example1" name="email" className="form-control" placeholder="Enter Your Email address" />
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">Password</label>
                <input type="password" placeholder="Enter your Password" name="password" id="form2Example2" className="form-control" />
              </div>

              {/* Display error message if login fails */}
              <p style={{ color: 'red' }}>{error ? 'Email or Password is not correct' : ''}</p>

              {/* Link to Signup */}
              <p>If you haven't an account. Please <Link to="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>Sign up</Link> Here</p>

              {/* Login Button */}
              <button type="submit" className="btn btn-dark">Login</button>
              <hr />

              {/* Google Login Button */}
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <button style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', paddingRight: '1.1em' }} onClick={handleRegister}>
                  <img style={{ width: '50px', borderRadius: '50px' }} src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                  Login with Google
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  )
}

export default Login;
