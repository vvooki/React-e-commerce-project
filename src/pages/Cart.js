import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
const KEY =
  'pk_test_51Ltt34LRZKQd7GPabPGVKxLhuFNtPNo9o5wx4tby9UptF4uOlOGVT28LTi5aa2CVJg9hO8Mqkd95BlLs4z6UgBhi00aZdWXMqp';

const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
        history.push('/success');
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <section className="cart-section">
      <div className="section-title-container max-width separator-padding">
        <div className="section-title">
          <h3>Your Cart (2)</h3>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-items-container">
          <article className="cart-item">
            <div className="cart-item-img">
              <img
                src="https://static.vecteezy.com/system/resources/previews/006/470/692/original/rocket-startup-pixel-art-business-icon-free-vector.jpg"
                alt=""
              />
            </div>
            <div className="cart-item-desc">
              <h3>Green Cell Ładowarka sieciowa ChargeSource5 (5x USB, 52W)</h3>
              <div>
                <div className="counter">
                  <FaPlus className="font-hover-effect" />
                  <p>1</p>
                  <FaMinus className="font-hover-effect" />
                </div>
                <div className="price">
                  <FiTrash2 className="font-hover-effect" />
                  <p>$120</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="cart-summary-container">
          <h2>ORDER SUMMARY</h2>
          <h3>Subtotal: $250</h3>
          <StripeCheckout
            name="3D Shop"
            image="https://cdn-icons-png.flaticon.com/512/630/630746.png"
            shippingAddress
            billingAddress
            description="Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
          >
            <button className="authorize-btn">CHECK OUT</button>
          </StripeCheckout>
        </div>
      </div>
    </section>
  );
};

export default Cart;
