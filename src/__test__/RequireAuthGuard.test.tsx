import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RequireAuthGuard } from '../navigation/guards/RequireAuthGuard';

function renderWithGuard(isAuthenticated: boolean) {
  if (isAuthenticated) {
    localStorage.setItem('accessToken', 'test-token');
  }

  return render(
    <MemoryRouter initialEntries={['/protected']}>
      <Routes>
        <Route path="/" element={<p>Login page</p>} />
        <Route
          path="/protected"
          element={
            <RequireAuthGuard>
              <p>Protected content</p>
            </RequireAuthGuard>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe('RequireAuthGuard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders children when the user is authenticated', () => {
    renderWithGuard(true);

    expect(screen.getByText('Protected content')).toBeInTheDocument();
  });

  it('redirects to "/" when the user is not authenticated', () => {
    renderWithGuard(false);

    expect(screen.getByText('Login page')).toBeInTheDocument();
    expect(screen.queryByText('Protected content')).not.toBeInTheDocument();
  });
});
