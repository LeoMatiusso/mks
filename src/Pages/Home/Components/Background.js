import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import api from '../../../Services/api';
import ProductsList from './ProductsList';

export default function Background() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const url = '/products?page=1&rows=50&sortBy=id&orderBy=ASC';
    setLoading(true);

    try {
      api.get(url)
        .then((res) => { setProducts(res.data.products); setTimeout(() => { setLoading(false); }, 1500); });
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          height: '85vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ProductsList
          products={products}
          loading={loading}
        />
      </Box>
    </Grid>
  );
}
