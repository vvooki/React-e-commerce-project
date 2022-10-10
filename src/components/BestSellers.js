import React from 'react';
import NewDrop from './NewDrop';
import productsData from '../data/productsData';
import ProductBox from './ProductBox';
const BestSellers = () => {
  return (
    <section className="special-offer-section">
      <div className="special-offer-container">
        <NewDrop />
        <div className="best-sellers-container">
          <div className="section-title-container">
            <div className="section-title">
              <h3>Best sellers</h3>
            </div>
          </div>
          <div className="best-sellers">
            {productsData.map((product) => {
              return <ProductBox key={product.id} {...product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
