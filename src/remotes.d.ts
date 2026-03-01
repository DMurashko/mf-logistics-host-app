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

declare module 'login_app/api' {
  import type { AxiosInstance } from 'axios';

  export const apiAxiosInstance: AxiosInstance;

  export interface IRefreshService {
    interceptReq(): void;
    interceptRes(): void;
  }

  export class RefreshTokenService implements IRefreshService {
    static initialize(axiosInstance: AxiosInstance): RefreshTokenService;
    static getInstance(): RefreshTokenService | null;
    interceptReq(): void;
    interceptRes(): void;
    destroy(): void;
  }

  export class InvalidRefreshTokenError extends Error {
    constructor(message?: string);
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

declare module 'ui_library/Header' {
  import type { FC } from 'react';
  export interface HeaderProps {
    onLogout: () => void;
    title?: string;
  }
  export const Header: FC<HeaderProps>;
}

declare module 'ui_library/DataGrid' {
  export {
    DataGrid,
    type DataGridProps,
    type GridColDef,
    type GridRowParams,
    type GridPaginationModel,
    type GridRowSelectionModel,
    type GridRenderCellParams,
    type GridSlots,
  } from '@mui/x-data-grid';
}

declare module 'ui_library/*' {
  import type { FC } from 'react';
  const Component: FC;
  export default Component;
}
