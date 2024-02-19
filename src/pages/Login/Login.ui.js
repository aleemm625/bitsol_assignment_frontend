// import LoginFormContainer from './LoginFormContainer';

import LoginFormContainer from "../../components/LoginForm/LoginForm.container";

const LoginPageUi = ({ onLogin }) => {
  const handleLogin = (credentials) => {
    // Call a function from the parent component to handle the login
    onLogin(credentials);
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <LoginFormContainer onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPageUi;