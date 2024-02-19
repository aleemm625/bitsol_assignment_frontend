// import { createContext, useContext, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocalStorage } from './useLocalStorage';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useLocalStorage('user', null);
//   const [isLoading, setIsLoading] = useState(true); // Add a loading state
//   const navigate = useNavigate();

//   // Simulate an asynchronous login process
//   const login = async (data) => {
//     setIsLoading(true); // Set loading to true when starting the login process
//     setUser(data);
//     setIsLoading(false); // Set loading to false after the user is set
//     navigate('/');
//   };

//   // call this function to sign out logged in user
//   const logout = () => {
//     setUser(null);
//     setIsLoading(false); // Set loading to false after the user is logged out
//     navigate('/', { replace: true });
//   };

//   const value = useMemo(
//     () => ({
//       user,
//       isLoading, // Include the loading state in the context value
//       login,
//       logout,
//     }),
//     [user, isLoading], // Include isLoading in the dependency array
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate('/');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
