import axios from 'axios';

import LoginPageUi from './Login.ui';
import config from '../../utils/apiConfig';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const LoginPageContainer = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (credentials) => {
    try {
      // console.log(credentials);
      const response = await axios.post(
        `${config.baseURL}/auth/login`,
        credentials,
      );
      if (response.data.access_token) {
        await login({ access_token: response.data.access_token });
      } else {
        alert('Invalid username or password');
      }
      // console.log(response);
      // localStorage.setItem('token', response.data.access_token);
      // navigate('/');

      // const response = await login(credentials);

      // console.log('Login successful:', response);
    } catch (error) {
      alert('failed to login, check your credentials!');
      console.error('Login failed:', error);
    }
  };

  return <LoginPageUi onLogin={handleLogin} />;
};

export default LoginPageContainer;
