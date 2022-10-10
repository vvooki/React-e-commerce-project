import React from 'react';
import { Link } from 'react-router-dom';
const newDrop = () => {
  return (
    <div className="new-drop">
      <Link to={'/'}>
        <div className="title">
          <p>NEW DROP</p>
          <p>3D MODEL</p>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/e-commerce-shop-react.appspot.com/o/figurine%20(2).png?alt=media&token=5fe0ca2c-5e34-4bd6-8ee9-97c8798c9da4"
          alt=""
        />
        <div className="drop-info">
          <h3>D&D Figurine - Dwarf</h3>
          <p>30$</p>
        </div>
      </Link>
    </div>
  );
};

export default newDrop;
