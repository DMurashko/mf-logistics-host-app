declare module 'login_app/LoginPage' {
  import React from 'react';
  export const LoginPage: React.ComponentType<{ onLogin?: () => void }>;
}

declare module 'login_app/RegisterPage' {
  import React from 'react';
  export const RegisterPage: React.ComponentType<{ onRegister?: () => void }>;
}

declare module 'login_app/auth' {
  import type { FC, PropsWithChildren } from 'react';
  export const useAuth: () => { isAuthenticated: boolean };
  export const AuthService: {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
  };
  export const UserAuthenticated: FC<PropsWithChildren>;
  export const UserNotAuthenticated: FC<PropsWithChildren>;
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
