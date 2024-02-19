import { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginFormContainer = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className={styles['login-container']}>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
    {error && <div className={styles.error}>{error}</div>}
  </div>
  );
};

export default LoginFormContainer;