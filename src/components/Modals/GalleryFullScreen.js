import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const GalleryFullScreen = ({
  name,
  gallery,
  value,
  setValue,
  nextSlide,
  prevSlide,
  photo,
  closeFullScreen,
  isGalleryFullScreen,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  const isActive = (index) => {
    if (value === index) {
      return true;
    } else return false;
  };

  //   const [photo, setPhoto] = useState(gallery[value]);
  return (
    <section
      className={`galleryFullScreen-section ${
        isGalleryFullScreen ? 'openTab' : 'closeTab'
      }`}
    >
      <div className="closeIcon" onClick={closeFullScreen}>
        <CgClose />
      </div>
      <MdKeyboardArrowRight
        className="nextPhotoIcon"
        onClick={() => nextSlide()}
      />
      <MdKeyboardArrowLeft
        className="prevPhotoIcon"
        onClick={() => prevSlide()}
      />
      <div
        className="photo"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {console.log(photo)}
        <img src={photo} alt="" />
      </div>

      <div className="photoInfo">
        <p>{name}</p>
        <div className="photoList">
          {gallery.map((photo, index) => {
            return (
              <div
                className={`${isActive(index) ? 'box box-active' : 'box'}`}
                key={index}
                onClick={() => setValue(index)}
              >
                <img src={photo} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryFullScreen;
