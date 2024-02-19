import LoginFormContainer from '../../components/LoginForm/LoginForm.container';

const LoginPageUi = ({ onLogin }) => {
  const handleLogin = (credentials) => {
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
