import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage } from 'login_app/LoginPage';
import { Dashboard } from 'dashboard_app/Dashboard';
import { ThemeProvider } from 'ui_library/Theme';

function AppRoutes() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
