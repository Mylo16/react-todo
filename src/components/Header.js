import React from 'react';
import styles from '../styles/Header.module.css';

// eslint-disable-next-line react/prop-types
const Header = ({ children }) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      {children}
    </header>
  );
};

export default Header;
