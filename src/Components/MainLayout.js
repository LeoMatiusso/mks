/* eslint-disable react/prop-types */
import React from 'react';
import { experimentalStyled, Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
  maxWidth: '100vw',
}));

export default function MainLayout({ children }) {
  return (
    <MainLayoutRoot>
      <Grid container spacing={0}>
        <Header />
        {children}
        <Footer />
      </Grid>
    </MainLayoutRoot>
  );
}
