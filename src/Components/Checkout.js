import React, {
  useState,
} from 'react';
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  Card,
  Drawer,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function Checkout() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const openMobile = () => {
    setOpenDrawer(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
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
                backgroundColor: '#fff', px: 2.5, py: 1, cursor: 'pointer',
              }}
              onClick={openMobile}
            >
              <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={6}>
                  <ShoppingCartRoundedIcon
                    sx={{
                      fontSize: '19px',
                      pt: '3px',
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
                    }}
                  >
                    0
                  </Typography>
                </Grid>
              </Grid>
            </Card>
            {/* <MenuIcon
              fontSize="large"
              sx={{
                color: theme.palette.text.primary,
              }}
              onClick={openMobile}
            /> */}
            <Drawer
              anchor="right"
              open={openDrawer}
              variant="temporary"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Box
                sx={{
                  alignItems: 'flex-start',
                  display: 'flex',
                  backgroundColor: theme.palette.background.paper,
                  flexDirection: 'column',
                  height: '100%',
                  p: 2,
                }}
              >
                <Grid
                  sx={{
                    mt: 1,
                    mx: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  >
                    Menu
                  </Typography>
                </Grid>
              </Box>
            </Drawer>
          </Toolbar>
        </Grid>
      </Grid>
    </Grid>
  );
}
