import React from 'react';
import { appTheme } from './themes/themes';
import { Layout } from './components/layout/layout';
import {Outlet} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}
