import React from 'react';
import {
  Container, Grid, Typography, AppBar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Checkout from './Checkout';

export default function Header() {
  const theme = useTheme();
  return (
    <Grid item xs={12}>
      <AppBar
        elevation={2}
        position="static"
        sx={{
          backgroundColor: '#0F52BA',
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
                  [theme.breakpoints.down('md')]: {
                    fontSize: '32px',
                  },
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
                  [theme.breakpoints.down('md')]: {
                    fontSize: '16px',
                  },
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
