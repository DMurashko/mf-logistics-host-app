import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage } from 'login_app/LoginPage';
import { RegisterPage } from 'login_app/RegisterPage';
import { Dashboard } from 'dashboard_app/Dashboard';
import { RequireAuthGuard } from './guards/RequireAuthGuard';
import { RequireGuestGuard } from './guards/RequireGuestGuard';

export const AppRoutes = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleRegister = () => {
    navigate('/dashboard');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireGuestGuard>
            <LoginPage onLogin={handleLogin} />
          </RequireGuestGuard>
        }
      />
      <Route
        path="/register"
        element={
          <RequireGuestGuard>
            <RegisterPage onRegister={handleRegister} />
          </RequireGuestGuard>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuthGuard>
            <Dashboard />
          </RequireAuthGuard>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
