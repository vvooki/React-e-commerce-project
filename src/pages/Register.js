import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="register-section">
      <div className="register-container max-width">
        <h2>Sign up</h2>
        <div className="form-container">
          <form action="">
            <input type="email" name="" id="" placeholder="email" />
            <input type="password" name="" id="" placeholder="password" />
            <input
              type="password"
              name=""
              id=""
              placeholder="confirm the password"
            />
            <button type="submit" className="authorize-btn">
              Sign up
            </button>
          </form>
          <p>
            By signing up, you agree to our <Link to="/">Privacy Policy</Link>{' '}
            and <Link to="/">Terms of Use</Link>.
          </p>

          <p>
            Already have an account?{' '}
            <b>
              <Link to="/login">Sign in!</Link>
            </b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
