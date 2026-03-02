import { useEffect, useState } from 'react';

const StorageKey = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const;

class AuthService {
  static get isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  static getAccessToken(): string | null {
    return localStorage.getItem(StorageKey.ACCESS_TOKEN);
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem(StorageKey.REFRESH_TOKEN);
  }

  static setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(StorageKey.ACCESS_TOKEN, accessToken);
    localStorage.setItem(StorageKey.REFRESH_TOKEN, refreshToken);
  }

  static clearTokens(): void {
    localStorage.removeItem(StorageKey.ACCESS_TOKEN);
    localStorage.removeItem(StorageKey.REFRESH_TOKEN);
  }
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated);

  const handleAuthChange = () => {
    setIsAuthenticated(AuthService.isAuthenticated);
  };

  useEffect(() => {
    window.addEventListener('storage', handleAuthChange);
    return () => {
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  return { isAuthenticated };
};

export { AuthService, useAuth, StorageKey };
