import React from 'react';
import {
  Grid, Container, Card, Typography, Box, Skeleton,
} from '@mui/material';
import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Image = styled.img`
  height: 138px;
`;

export default function ProductsList(props) {
  const { products, loading } = props;
  return (
    <Grid item xs={12}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {
            products.map((product) => (
              <Grid item xs={12} md={3}>
                <Card
                  sx={{
                    backgroundColor: 'background.paper', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.135216)', minHeight: '310px', position: 'relative',
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                      {
                        loading
                          ? <Skeleton animation="wave" variant="rectangular" width="100%" height="138px" />
                          : (
                            <Image
                              src={product.photo}
                              alt="product"
                            />
                          )
                      }
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={7} sx={{ p: 2 }}>
                          {
                            loading
                              ? <Skeleton animation="wave" variant="rectangular" width="100%" height="13px" />
                              : (
                                <Typography
                                  sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: '13px',
                                    lineHeight: '19px',
                                  }}
                                >
                                  {product.name}
                                </Typography>
                              )
                          }
                        </Grid>
                        <Grid item xs={5} sx={{ p: 2 }}>
                          {
                            loading
                              ? <Skeleton animation="wave" variant="rectangular" width="100%" height="30px" />
                              : (
                                <Box
                                  sx={{
                                    backgroundColor: '#373737', borderRadius: '5px', py: 1, display: 'flex', justifyContent: 'center',
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: 'Montserrat',
                                      fontWeight: 700,
                                      fontSize: '14px',
                                      lineHeight: '15px',
                                      color: '#fff',
                                    }}
                                  >
                                    R$
                                    {' '}
                                    {product.price}
                                  </Typography>
                                </Box>
                              )
                          }
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        {
                          loading
                            ? (
                              <Grid container sx={{ pb: 2 }}>
                                <Grid item xs={12}>
                                  <Skeleton animation="wave" variant="rectangular" width="100%" height="15px" />
                                </Grid>
                                <Grid item xs={12}>
                                  <Skeleton animation="wave" variant="rectangular" width="100%" height="15px" />
                                </Grid>
                              </Grid>
                            )
                            : (
                              <Typography
                                sx={{
                                  fontFamily: 'Montserrat',
                                  fontWeight: 300,
                                  fontSize: '10px',
                                  lineHeight: '12px',
                                  px: 2,
                                  pb: 2,
                                }}
                              >
                                {product.description}
                              </Typography>
                            )
                        }
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            backgroundColor: loading ? '#eee' : '#0F52BA',
                            cursor: loading ? 'auto' : 'pointer',
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                          }}
                        >
                          <Grid container sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                              }}
                            >
                              <ShoppingBagOutlinedIcon sx={{ color: '#fff', pr: 0.5 }} />
                              <Typography
                                sx={{
                                  fontFamily: 'Montserrat',
                                  fontWeight: 600,
                                  fontSize: '14px',
                                  color: '#fff',
                                  pl: 0.5,
                                  lineHeight: '18px',
                                }}
                              >
                                COMPRAR
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Grid>
  );
}
