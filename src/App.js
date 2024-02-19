// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from 'react-router-dom';
import LoginPageContainer from './pages/Login/Login.container';
import React, { Suspense } from 'react';
import ErrorPage from './pages/Error/Error.container';
import NavBar from './components/Navbar/Navbar.container';
import './App.css';
import AddNewUser from './pages/AddNewUser/AddNewUser.container';
import EditUser from './pages/EditUser/EditUser.container';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home/Home.container';

// const Home = React.lazy(() => import('./pages/Home/Home.container'));

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />

        <Routes>
          <Route element={<ProtectedRoute />}>
            {/* <Route
              // exact
              path="/"
              // lazy={() => import('./pages/Home/Home.container')}
              element={
                // <Suspense fallback={<div>Loading...</div>}>
                <Home />
                // </Suspense>
              }
            /> */}
            <Route path="/user/add" element={<AddNewUser />} />
            <Route path="/user/edit" element={<EditUser />} />
          </Route>

          <Route path="/login" element={<LoginPageContainer />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
