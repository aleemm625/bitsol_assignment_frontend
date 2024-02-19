// NavBar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to="/" onClick={handleHomeClick}>
          <button className={styles.homeButton}>Home</button>
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <Link to="/user/add">
          <button className={styles.navButton}>Add User</button>
        </Link>
        <button className={styles.navButton} onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
