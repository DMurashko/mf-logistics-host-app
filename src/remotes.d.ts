declare module 'login_app/LoginPage' {
  import React from 'react';
  export const LoginPage: React.ComponentType<{ onLogin?: () => void }>;
}

declare module 'login_app/RegisterPage' {
  import React from 'react';
  export const RegisterPage: React.ComponentType<{ onRegister?: () => void }>;
}

declare module 'login_app/auth' {
  export const useAuth: () => { isAuthenticated: boolean };
  export class AuthService {
    static get isAuthenticated(): boolean;
    static getAccessToken(): string | null;
    static getRefreshToken(): string | null;
    static setTokens(accessToken: string, refreshToken: string): void;
    static clearTokens(): void;
  }
  export enum StorageKey {
    ACCESS_TOKEN = 'accessToken',
    REFRESH_TOKEN = 'refreshToken',
  }
}

declare module 'dashboard_app/Dashboard' {
  import React from 'react';
  export const Dashboard: React.ComponentType;
}

declare module 'ui_library/Theme' {
  import React, { ReactNode } from 'react';
  export const ThemeProvider: React.ComponentType<{ children: ReactNode }>;
}

declare module 'ui_library/*' {
  import type { FC } from 'react';
  const Component: FC;
  export default Component;
}
