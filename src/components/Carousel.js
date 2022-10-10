import React, { forwardRef, useRef, useState } from 'react';
import productsData from '../data/productsData';
import ProductBox from './ProductBox';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Carousel = () => {
  const myRef = React.createRef(null);
  const [width, setWidth] = useState(0);
  const [isRightBtnVisible, setIsRightBtnVisible] = useState(true);
  const [isLeftBtnVisible, setIsLeftBtnVisible] = useState(false);
  console.log('state width: ', width);

  const scrollNext = () => {
    if (width === 0) {
      setWidth(myRef.current.offsetWidth);
    }
    console.log('full width: ', myRef.current.scrollWidth);
    myRef.current.scrollLeft += myRef.current.offsetWidth;
    setWidth(width + myRef.current.offsetWidth);
    if (width + 2 * myRef.current.offsetWidth >= myRef.current.scrollWidth) {
      console.log(width, ' > ', myRef.current.scrollWidth);
      setIsRightBtnVisible(false);
      setIsLeftBtnVisible(true);
    } else {
      setIsRightBtnVisible(true);
      setIsLeftBtnVisible(true);
    }
  };

  const scrollBack = () => {
    myRef.current.scrollLeft -= myRef.current.offsetWidth;
    setWidth(width - myRef.current.offsetWidth);
    if (width - myRef.current.offsetWidth <= 0) {
      setIsLeftBtnVisible(false);
      setIsRightBtnVisible(true);
    } else {
      setIsLeftBtnVisible(true);
      setIsRightBtnVisible(true);
    }
  };

  //dragging functionality

  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const onMouseDown = (e) => {
    setIsScrolling(true);
    setClientX(e.clientX);
    setScrollX(myRef.current.scrollLeft);
    myRef.current.style.cursor = 'grabbing';
    myRef.current.style.userSelect = 'none';
  };

  const onMouseUp = () => {
    setIsScrolling(false);
    myRef.current.style.cursor = 'grab';
    myRef.current.style.removeProperty('user-select');
  };

  const onMouseMove = (e) => {
    if (isScrolling) {
      const dx = e.clientX - clientX;
      myRef.current.scrollLeft = scrollX - dx;
      setScrollX(scrollX - dx);
      setClientX(e.clientX);
    }
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="section-title-container">
          <div className="section-title">
            <h3>Special offer</h3>
          </div>
        </div>
        <div
          ref={myRef}
          className="media-scroller with-overscroll snaps-inline snaps--individual "
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <MdKeyboardArrowRight
            className={`nextPhotoIcon ${
              isRightBtnVisible ? 'displayBtn' : 'hideBtn'
            }`}
            onClick={() => scrollNext()}
          />
          <MdKeyboardArrowLeft
            className={`prevPhotoIcon ${
              isLeftBtnVisible ? 'displayBtn' : 'hideBtn'
            }`}
            onClick={() => scrollBack()}
          />

          {productsData.map((product) => {
            return <ProductBox {...product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
