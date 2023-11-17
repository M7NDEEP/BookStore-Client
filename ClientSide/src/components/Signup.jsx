import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Signup = () => {
  // Access authentication context
  const { createUser, loginwithgoogle } = useContext(AuthContext);

  // Get current location and navigation function
  const location = useLocation();
  const navigate = useNavigate();

  // Determine the path to redirect after successful signup
  const from = location.state?.from?.pathname || '/';

  // Handle the signup form submission
  const handleSignup = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    let userCredential; // Declare userCredential outside the try block

    try {
      // Attempt to create a new user
      userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Redirect to the specified path after successful signup
      navigate(from, { replace: true });
      alert("Sign up Successfully");
    } catch (error) {
      console.error("Error creating user:", error);

      // Log the entire userCredential object for debugging
      console.log("Full userCredential object:", userCredential);

      // Handle specific error codes
      if (error.code === 'auth/email-already-in-use') {
        console.log("Email is already in use. Please use a different email.");
      } else {
        console.log("An error occurred during user creation.");
      }
    }
  };

  // Handle the Google signup button click
  const handleRegister = () => {
    loginwithgoogle().then((result) => {
      const user = result.user;
      
      // Redirect to the specified path after successful signup
      navigate(from, { replace: true });
      alert("Sign up Successfully");
    });
  }

  return (
    <>
      <br />
      <section className="pb-4" style={{ border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <div className="bg-white">
          <h2 style={{ textAlign: "center", margin: "0px 20px", padding: "0.6em 0px", fontWeight: "bolder" }}>
            Sign Up
          </h2>

          <section className="w-100 p-4 d-flex justify-content-center pb-4">
            <form onSubmit={handleSignup} style={{ width: '22rem' }}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1" >Email address</label>
                <input type="email" id="form2Example1" name='email' className="form-control" placeholder='Enter Your Email address' />
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">Password</label>
                <input type="password" placeholder='Enter your Password' name='password' id="form2Example2" className="form-control" />
              </div>
              <p>If you have an account. Please<Link to="/login" style={{ color: "blue", textDecoration: "underline" }}> Login</Link> Here</p>
              <button type="submit" className="btn btn-dark">Sign up</button>
              <hr />
              <button style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', paddingRight: '1.1em' }} onClick={handleRegister}>
                <img style={{ width: '50px', borderRadius: '50px' }} src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                Signup with Google
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default Signup;
