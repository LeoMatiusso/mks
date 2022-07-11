import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Grid item xs={12} sx={{ position: 'fixed', bottom: 0, width: '100vw' }}>
      <Box
        sx={{
          backgroundColor: '#EEEEEE',
          p: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '12px',
            lineHeigth: '14.63px',
          }}
        >
          MKS sistemas © Todos os direitos reservados
        </Typography>
      </Box>
    </Grid>
  );
}
