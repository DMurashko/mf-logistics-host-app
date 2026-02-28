import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'ui_library/Theme';
import { AppRoutes } from './navigation/Routes';

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
