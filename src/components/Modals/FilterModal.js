import React from 'react';
import { GoChevronLeft } from 'react-icons/go';

const FilterModal = ({ isFilterModalOpen, closeFilterModal }) => {
  return (
    <section
      className={`filter-modal-section modal-section ${
        isFilterModalOpen ? 'open-modal' : 'close-modal'
      }`}
    >
      <div className="modal-container">
        <div className="modal-top-area">
          <button onClick={closeFilterModal}>
            <GoChevronLeft />
          </button>
          <h2>Filters</h2>
        </div>
        <div className="modal-content">
          <form action="">
            <div className="price-range">
              <input type="number" name="" id="" placeholder="from $" />
              <input type="number" name="" id="" placeholder="to $" />
            </div>
            <p>Category:</p>
            <input type="radio" name="" id="" /> yes
            <input type="radio" name="" id="" /> no
          </form>
        </div>
      </div>
    </section>
  );
};

export default FilterModal;
