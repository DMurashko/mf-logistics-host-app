import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'ui_library/Theme';
import { AppRoutes } from './navigation/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { apiAxiosInstance, RefreshTokenService } from 'login_app/api';

RefreshTokenService.initialize(apiAxiosInstance);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
