import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { links } from '../../dataNav';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';

const Sidebar = ({ showSidebar, closeSidebar }) => {
  return (
    <nav
      className={`sidebar ${showSidebar ? 'sidebar-open' : 'sidebar-close'}`}
    >
      <button className="nav-toggle close-nav-btn" onClick={closeSidebar}>
        <HiMenuAlt3 />
      </button>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url} onClick={closeSidebar}>
                {link.text}
              </Link>
              <div className="separator-line"></div>
            </li>
          );
        })}
      </ul>
      <div className="nav-btns-sidebar">
        <button className="login-btn-sidebar">
          <Link to="/login" onClick={closeSidebar}>
            sign in
          </Link>
        </button>
        <Link to="/cart" className="icon-container" onClick={closeSidebar}>
          <BsCart3 className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
