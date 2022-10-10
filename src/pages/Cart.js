import React from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
const Cart = () => {
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
          <button className="authorize-btn">CHECK OUT</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
