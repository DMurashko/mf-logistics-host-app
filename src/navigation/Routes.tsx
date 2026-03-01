import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage } from 'login_app/LoginPage';
import { RegisterPage } from 'login_app/RegisterPage';
import { AuthService } from 'login_app/auth';
import { Dashboard } from 'dashboard_app/Dashboard';
import { Header } from 'ui_library/Header';
import { RequireAuthGuard } from './guards/RequireAuthGuard';
import { RequireGuestGuard } from './guards/RequireGuestGuard';

const AuthenticatedLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.clearTokens();
    navigate('/');
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Outlet />
    </>
  );
};

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
        element={
          <RequireAuthGuard>
            <AuthenticatedLayout />
          </RequireAuthGuard>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
