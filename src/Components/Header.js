import React from 'react';
import {
  Container, Grid, Typography, AppBar,
} from '@mui/material';
import Checkout from './Checkout';

export default function Header() {
  return (
    <Grid item xs={12}>
      <AppBar
        elevation={2}
        position="static"
        sx={{
          backgroundColor: '#0F52BA', p: 3,
        }}
      >
        <Container maxWidth="xl">
          <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  fontSize: '40px',
                  lineHeight: '19px',
                }}
              >
                MKS
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 300,
                  fontSize: '20px',
                  lineHeight: '19px',
                  pl: 1,
                }}
              >
                Sistemas
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Checkout />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Grid>
  );
}
