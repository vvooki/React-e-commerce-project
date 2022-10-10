import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className="register-section">
      <div className="register-container max-width">
        <h2>Sign in</h2>
        <div className="form-container">
          <form action="">
            <input type="email" name="" id="" placeholder="email" />
            <input type="password" name="" id="" placeholder="password" />
            <button type="submit" className="authorize-btn">
              Sign in
            </button>
          </form>
          <p>
            <Link to="/">Forgot password?</Link>
          </p>
          <p>
            By logging in, you agree to our <Link to="/">Privacy Policy</Link>{' '}
            and <Link to="/">Terms of Use</Link>.
          </p>

          <p>
            Not a member?{' '}
            <b>
              <Link to="/register">Join us!</Link>
            </b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
