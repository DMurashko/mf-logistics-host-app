import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'host_app',
      dts: false,
      remotes: {
        ui_library: {
          type: 'module',
          name: 'ui_library',
          entry: 'http://localhost:3003/remoteEntry.js',
          entryGlobalName: 'ui_library',
          shareScope: 'default',
        },
        login_app: {
          type: 'module',
          name: 'login_app',
          entry: 'http://localhost:3001/remoteEntry.js',
          entryGlobalName: 'login_app',
          shareScope: 'default',
        },
        dashboard_app: {
          type: 'module',
          name: 'dashboard_app',
          entry: 'http://localhost:3004/remoteEntry.js',
          entryGlobalName: 'dashboard_app',
          shareScope: 'default',
        },
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        'react/jsx-runtime': { singleton: true, requiredVersion: '^19.0.0' },
        'react/jsx-dev-runtime': {
          singleton: true,
          requiredVersion: '^19.0.0',
        },
        '@mui/material': { singleton: true },
        '@emotion/react': { singleton: true },
        '@emotion/styled': { singleton: true },
        '@tanstack/react-query': { singleton: true },
        'react-router-dom': { singleton: true },
        '@mui/x-data-grid': { singleton: true },
      },
    }),
    react(),
  ],
  server: {
    port: 3000,
    strictPort: true,
    origin: 'http://localhost:3000',
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
