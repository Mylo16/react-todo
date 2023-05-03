/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../Context/AuthContext';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, logout } = useAuthContext();

  const ref = useRef();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);

  return (
    <>
      <nav ref={ref} className="navbar">
        <button
          type="button"
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              {link.path === 'login' ? (
                !user && (
                <li>
                  <NavLink
                    to={link.path}
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
                )
              ) : link.path === 'profile' ? (
                user && (
                <li>
                  <NavLink
                    to={link.path}
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
                )
              ) : (
                <li>
                  <NavLink
                    to={link.path}
                    onClick={() => setNavbarOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
              )}
            </React.Fragment>
          ))}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>

      {user && (
        <div className="logout">
          <p>{user}</p>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};
export default Navbar;
