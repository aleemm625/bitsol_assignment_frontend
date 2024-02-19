// NavBar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        localStorage.removeItem('access_token');
        navigate('/login');

    }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <button className={styles.homeButton}>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className={styles.navbarRight}>
        <button className={styles.navButton}>
          <Link to="/user/add">Add User</Link>
        </button>
        <button className={styles.navButton} onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default NavBar;
