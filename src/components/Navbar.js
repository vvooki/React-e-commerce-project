import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { HiMenuAlt2 } from 'react-icons/hi';
import { links } from '../dataNav';
import Sidebar from './Modals/Sidebar';
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'unset';
  }, [showSidebar]);

  return (
    <header className="header">
      <div className="nav-center">
        <button className="nav-toggle" onClick={() => setShowSidebar(true)}>
          <HiMenuAlt2 />
        </button>

        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />

        <nav className="nav">
          <ul className="nav-links">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <h2 className="logo">
          <Link to="/"> LOGOTYPE </Link>{' '}
        </h2>
        <div className="nav-btns">
          <button className="login-btn">
            <Link to="/login">sign in</Link>
          </button>
          <Link to="/cart" className="icon-container">
            <BsCart3 className="icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
