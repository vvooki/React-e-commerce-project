import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
const ProductBox = ({ id, img, name, price, category, reviews }) => {
  return (
    <div className="product">
      <Link draggable="false" to={`SingleProduct/${id}`}>
        <p className="category-name">
          <span>{category}</span>
        </p>
        <img draggable="false" src={img} alt={name} />
        <h4>{name}</h4>
        <div className="info">
          <p>{price}$</p>
          <p>
            {reviews} <AiOutlineStar />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductBox;
