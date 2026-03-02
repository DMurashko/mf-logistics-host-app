import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { RequireGuestGuard } from '../navigation/guards/RequireGuestGuard';

function renderWithGuard(isAuthenticated: boolean) {
  if (isAuthenticated) {
    localStorage.setItem('accessToken', 'test-token');
  }

  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path="/"
          element={
            <RequireGuestGuard>
              <p>Guest content</p>
            </RequireGuestGuard>
          }
        />
        <Route path="/dashboard" element={<p>Dashboard page</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('RequireGuestGuard', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders children when the user is a guest (not authenticated)', () => {
    renderWithGuard(false);

    expect(screen.getByText('Guest content')).toBeInTheDocument();
  });

  it('redirects to "/dashboard" when the user is authenticated', () => {
    renderWithGuard(true);

    expect(screen.getByText('Dashboard page')).toBeInTheDocument();
    expect(screen.queryByText('Guest content')).not.toBeInTheDocument();
  });
});
