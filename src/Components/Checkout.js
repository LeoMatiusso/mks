/* eslint-disable no-unused-vars */
import React, {
  useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  Divider,
  Card,
  Drawer,
} from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';

const Image = styled.img`
  height: 100%;
`;

export default function Checkout() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);

  const openMobile = () => {
    setOpenDrawer(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  const handleChange = (key, type, product) => {
    dispatch({
      type: 'CHANGE_PRODUCT',
      payload: {
        key, type, product,
      },
    });
  };

  const handleEnd = () => {
    if (products.length <= 0) {
      return window.alert('Você não colocou nenhum item no carrinho');
    } if (products.length === 1) {
      return window.alert(`Você comprou ${products.length} item, totalizando R$ ${total}`);
    }
    return window.alert(`Você comprou ${products.length} itens, totalizando R$ ${total}`);
  };

  return (
    <Grid
      item
      xs={12}
      sx={{ pb: 2 }}
    >
      <Grid
        container
        spacing={0}
      >
        <Grid item xs={12}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Card
              sx={{
                backgroundColor: '#fff',
                px: 2.5,
                py: 1,
                cursor: 'pointer',
                borderRadius: '8px',
                [theme.breakpoints.down('md')]: {
                  px: 1,
                  py: 0.5,
                  mt: 1.5,
                },
              }}
              onClick={openMobile}
            >
              <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={6}>
                  <ShoppingCartRoundedIcon
                    sx={{
                      fontSize: '19px',
                      pt: '3px',
                      [theme.breakpoints.down('md')]: {
                        fontSize: '13px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '21.94px',
                      [theme.breakpoints.down('md')]: {
                        fontSize: '12px',
                      },
                    }}
                  >
                    {products.length}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
            <Drawer
              anchor="right"
              open={openDrawer}
              variant="temporary"
              PaperProps={{
                sx: {
                  width: '500px',
                  [theme.breakpoints.down('md')]: {
                    width: '90vw',
                  },
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#0F52BA',
                  minHeigth: '100vh',
                  p: 2,
                }}
              >
                <Grid item xs={12}>
                  <Grid container sx={{ display: 'flex', alignItems: 'center', pb: 3 }}>
                    <Grid
                      item
                      xs={9}
                      md={6}
                    >
                      <Typography sx={{
                        fontFamily: 'Montserrat', fontWeight: 700, fontSize: '27px', lineHeigth: '32.91px', color: '#fff',
                      }}
                      >
                        Carrinho de compras
                      </Typography>
                    </Grid>
                    <Grid item xs={3} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <CloseRoundedIcon
                        sx={{
                          color: '#fff',
                          background: '#000',
                          borderRadius: '50px',
                          p: 1,
                          cursor: 'pointer',
                        }}
                        onClick={toggleDrawer(false)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    minHeight: '70vh',
                    pb: 5,
                    [theme.breakpoints.down('md')]: {
                      pb: 13,
                    },
                  }}
                >
                  <Grid container spacing={4}>

                    {products.map((item, index) => (
                      <Grid item xs={12} sx={{ position: 'relative' }}>
                        <Box sx={{
                          position: 'absolute',
                          top: 16,
                          right: -10,
                          [theme.breakpoints.down('md')]: {
                            display: 'none',
                          },
                        }}
                        >
                          <CloseRoundedIcon
                            sx={{
                              color: '#fff',
                              fontSize: '10px',
                              background: '#000',
                              borderRadius: '50px',
                              p: 1,
                              cursor: 'pointer',
                            }}
                            onClick={() => handleChange(index, 'remove', item)}
                          />
                        </Box>
                        <Card sx={{
                          backgroundColor: '#fff',
                          borderRadius: '8px',
                          [theme.breakpoints.down('md')]: {
                            position: 'relative',
                          },
                        }}
                        >
                          <Box sx={{
                            position: 'absolute',
                            right: 0,
                            [theme.breakpoints.up('md')]: {
                              display: 'none',
                            },
                          }}
                          >
                            <CloseRoundedIcon
                              sx={{
                                color: '#000',
                                fontSize: '17px',
                                borderRadius: '50px',
                                p: 1,
                                cursor: 'pointer',
                              }}
                              onClick={() => handleChange(index, 'remove', item)}
                            />
                          </Box>
                          <Grid
                            container
                            spacing={2}
                            sx={{
                              p: 2,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <Grid
                              item
                              xs={12}
                              sm={3}
                              sx={{
                                height: '65px',
                                [theme.breakpoints.down('md')]: {
                                  height: '100px',
                                  display: 'flex',
                                  justifyContent: 'center',
                                },
                              }}
                            >
                              <Image src={item.photo} alt="itemPhoto" />
                            </Grid>
                            <Grid
                              item
                              sm={3.5}
                              xs={12}
                              sx={{

                                [theme.breakpoints.down('md')]: {
                                  display: 'flex',
                                  justifyContent: 'center',
                                },
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: 'Montserrat',
                                  fontWeight: 400,
                                  fontSize: '13px',
                                  lineHeight: '17px',
                                  [theme.breakpoints.down('md')]: {
                                    fontSize: '16px',
                                  },
                                }}
                              >
                                {item.name}
                              </Typography>
                            </Grid>
                            <Grid item sm={2} xs={6}>
                              <Grid container>
                                <Grid
                                  item
                                  xs={12}
                                  sx={{
                                    [theme.breakpoints.down('md')]: {
                                      display: 'none',
                                    },
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: 'Montserrat',
                                      fontWeight: 400,
                                      fontSize: '5px',
                                      lineHeight: '6px',
                                    }}
                                  >
                                    Qtd:
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Card sx={{
                                    border: '0.3px solid #BFBFBF',
                                    borderRadius: '4px',
                                    minHeight: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    [theme.breakpoints.down('md')]: {
                                      height: '35px',
                                    },
                                  }}
                                  >
                                    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                                      <Grid item xs={3.8} sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }} onClick={() => handleChange(index, '-')}>
                                        <RemoveIcon sx={{
                                          fontSize: 12,
                                          [theme.breakpoints.down('md')]: {
                                            fontSize: 17,
                                          },
                                        }}
                                        />
                                      </Grid>
                                      <Divider orientation="vertical" flexItem />
                                      <Grid item xs={3.8} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Typography
                                          sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: 400,
                                            fontSize: '8px',
                                            lineHeight: '10px',
                                            [theme.breakpoints.down('md')]: {
                                              fontSize: 17,
                                            },
                                          }}
                                        >
                                          {item.qtd}
                                        </Typography>
                                      </Grid>
                                      <Divider orientation="vertical" flexItem />
                                      <Grid item xs={3.8} sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }} onClick={() => handleChange(index, '+')}>
                                        <AddIcon sx={{
                                          fontSize: 12,
                                          [theme.breakpoints.down('md')]: {
                                            fontSize: 20,
                                          },
                                        }}
                                        />
                                      </Grid>
                                    </Grid>
                                  </Card>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              sm={3.5}
                              sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                [theme.breakpoints.down('sm')]: {
                                  fontSize: 17,
                                  display: 'none',
                                },
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: 'Montserrat',
                                  fontWeight: 700,
                                  fontSize: '14px',
                                  lineHeight: '17px',
                                  [theme.breakpoints.down('md')]: {
                                    fontSize: '15px',
                                  },
                                }}
                              >
                                R$
                                {' '}
                                {item.price}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={3.5}
                              xs={6}
                              sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                [theme.breakpoints.up('sm')]: {
                                  display: 'none',
                                },
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: 'Montserrat',
                                  fontWeight: 700,
                                  fontSize: '14px',
                                  backgroundColor: '#373737',
                                  lineHeight: '17px',
                                  color: '#fff',
                                  py: 1.3,
                                  px: 0.5,
                                  borderRadius: '5px',
                                  [theme.breakpoints.down('md')]: {
                                    fontSize: '15px',
                                  },
                                }}
                              >
                                R$
                                {' '}
                                {item.price}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid
                      item
                      xs={3}
                      md={6}
                      sx={{
                        pb: 13,
                        [theme.breakpoints.down('md')]: {
                          pb: 13,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '28px',
                          lineHeight: '15px',
                          color: '#fff',
                        }}
                      >
                        Total:
                      </Typography>
                    </Grid>
                    <Grid item xs={9} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Typography
                        sx={{
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                          fontSize: '28px',
                          lineHeight: '15px',
                          color: '#fff',
                        }}
                      >
                        R$
                        {' '}
                        {total}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
              <Grid
                item
                xs={12}
                sx={{
                  position: 'fixed',
                  bottom: 0,
                  width: '500px',
                  [theme.breakpoints.down('md')]: {
                    width: '90vw',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex', justifyContent: 'center', py: 5, width: '100%', backgroundColor: '#000', cursor: 'pointer',
                  }}
                  onClick={handleEnd}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Montserrat',
                      fontWeight: 700,
                      fontSize: '28px',
                      lineHeight: '15px',
                      color: '#fff',
                      [theme.breakpoints.down('md')]: {
                        fontSize: '20px',
                      },
                    }}
                  >
                    Finalizar Compra
                  </Typography>
                </Box>
              </Grid>
            </Drawer>
          </Toolbar>
        </Grid>
      </Grid>
    </Grid>
  );
}
