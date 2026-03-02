import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from '../navigation/Routes';

function renderRoutes(initialRoute = '/') {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRoutes />
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

describe('AppRoutes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows the login page at "/" when not authenticated', () => {
    renderRoutes('/');

    expect(screen.getByRole('heading', { name: /login page/i })).toBeInTheDocument();
  });

  it('shows the register page at "/register" when not authenticated', () => {
    renderRoutes('/register');

    expect(screen.getByRole('heading', { name: /register page/i })).toBeInTheDocument();
  });

  it('redirects to dashboard when authenticated user visits "/"', () => {
    localStorage.setItem('accessToken', 'test-token');

    renderRoutes('/');

    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });

  it('redirects to dashboard when authenticated user visits "/register"', () => {
    localStorage.setItem('accessToken', 'test-token');

    renderRoutes('/register');

    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });

  it('shows the dashboard at "/dashboard" when authenticated', () => {
    localStorage.setItem('accessToken', 'test-token');

    renderRoutes('/dashboard');

    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });

  it('redirects to "/" when non-authenticated user visits "/dashboard"', () => {
    renderRoutes('/dashboard');

    expect(screen.getByRole('heading', { name: /login page/i })).toBeInTheDocument();
  });

  it('redirects unknown routes to "/"', () => {
    renderRoutes('/unknown-route');

    expect(screen.getByRole('heading', { name: /login page/i })).toBeInTheDocument();
  });

  it('shows the header with logout button on authenticated routes', () => {
    localStorage.setItem('accessToken', 'test-token');

    renderRoutes('/dashboard');

    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });

  it('clears tokens and navigates to login on logout', async () => {
    const user = userEvent.setup();
    localStorage.setItem('accessToken', 'test-token');
    localStorage.setItem('refreshToken', 'test-refresh');

    renderRoutes('/dashboard');

    await user.click(screen.getByRole('button', { name: /logout/i }));

    expect(localStorage.getItem('accessToken')).toBeNull();
    expect(localStorage.getItem('refreshToken')).toBeNull();
    expect(screen.getByRole('heading', { name: /login page/i })).toBeInTheDocument();
  });

  it('navigates to dashboard after login callback', async () => {
    const user = userEvent.setup();

    renderRoutes('/');

    // Set token to simulate login (so auth guard allows dashboard)
    localStorage.setItem('accessToken', 'new-token');
    await user.click(screen.getByRole('button', { name: /mock login/i }));

    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });

  it('navigates to dashboard after register callback', async () => {
    const user = userEvent.setup();

    renderRoutes('/register');

    // Set token to simulate registration
    localStorage.setItem('accessToken', 'new-token');
    await user.click(screen.getByRole('button', { name: /mock register/i }));

    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });
});
