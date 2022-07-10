import React from 'react';
import { Grid } from '@mui/material';
import MainLayout from '../../Components/MainLayout';
import Background from './Components/Background';

export default function Home() {
  return (
    <MainLayout>
      <Grid item xs={12}>
        <Background />
      </Grid>
    </MainLayout>
  );
}
