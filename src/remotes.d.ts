declare module 'login_app/LoginPage' {
  import React from 'react';
  export const LoginPage: React.ComponentType;
}

declare module 'ui_library/Theme' {
  import React, { ReactNode } from 'react';
  export const ThemeProvider: React.ComponentType<{ children: ReactNode }>;
}

declare module 'ui_library/*' {
  const Component: any;
  export default Component;
}
