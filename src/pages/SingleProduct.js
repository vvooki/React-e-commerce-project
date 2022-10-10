import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import productsData from '../data/productsData';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = productsData.find(
    (product) => product.id === parseInt(productId)
  );
  return (
    <section className="product-card-section">
      <div className="product-link-categories">
        <p> 3D Models / D&D </p>
      </div>
      <div className="product-card-container">
        <Gallery {...product} />
        <div className="product-information">
          <h3>{product.name}</h3>
          <p className="category-name-product">{product.category}</p>
          <div className="info">
            <p>In stock: {product.countInStock}</p>
            <p>
              {product.reviews} <AiOutlineStar />
            </p>
          </div>
          <p className="price">{product.price}$</p>
          <button className="add-to-cart-btn">
            <Link to="/">add to cart</Link>
          </button>
        </div>
      </div>
      <section className="description-title-separator">
        <div className="description-title">
          <h3>Description</h3>
        </div>
      </section>
      <div className="product-description">
        {product.desc.map((paragraph, index) => {
          return (
            <div className="paragraph" key={index}>
              <h3>{paragraph.header}</h3>
              <p>{paragraph.detail}</p>
              <img src={paragraph.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SingleProduct;
