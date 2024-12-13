import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { RideProvider } from './context/RideContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ROUTES } from './utils/constants';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to={ROUTES.LOGIN} />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <RideProvider>
          <MainLayout>
            <Routes>
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.SIGNUP} element={<Signup />} />
              <Route
                path={ROUTES.HOME}
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path={ROUTES.PROFILE}
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Routes>
          </MainLayout>
          <Toaster position="top-center" />
        </RideProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;