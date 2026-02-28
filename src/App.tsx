import './App.css';
import { LoginPage } from 'login_app/LoginPage';
import { ThemeProvider } from 'ui_library/Theme';

function App() {
  return (
    <ThemeProvider>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
