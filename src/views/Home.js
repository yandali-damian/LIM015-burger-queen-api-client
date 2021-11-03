import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Stack, Button, Grid, ButtonGroup } from '@mui/material';
import { useStyles,themeHome} from '../style/styleHome.js';
import { useStyle } from '../style/styleOrder.js';
import logo1 from '../img/logo1.png';
import { getProducts } from '../services/Product.js';
import Pedidos from '../views/Order.js'
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../style/styleLogin.js';


export default function Home() {

  const [desayunos, setDesayunos] = useState([]);
  const [menu, setMenu] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  const ListarDesayuno = () => {
    // console.log('lista de DESAYUNO');
    getProducts('desayuno').then(producto => {
      // console.log(producto);
      setBebidas('');
      setMenu('');
      setDesayunos(producto);
    });
  }

  const ListarMenu = () =>{
    getProducts('menú').then(producto=>{
      setDesayunos('');
      setBebidas('');
      setMenu(producto);

    });
  }

  const ListarBebidas = () =>{
    getProducts('bebidas').then(producto=>{
      setDesayunos('');
      setMenu('');
      setBebidas(producto);
    });
  }

  const classes = useStyles();
  const classe = useStyle();
  return (
    // <ThemeProvider theme={theme}>
    <Box className={classes.fondoHome} >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.Toolbar}>
          <Toolbar className={classes.ToolbarColor}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.03 }}>
              BURGER
            </Typography>
            <img className={classes.logo} src={logo1} alt='Header Title' />
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
              QUEEN
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 0.1 }}>
              {localStorage.getItem('user')}
            </Typography>
            <ThemeProvider theme={theme}>
              <ButtonGroup variant="contained" color="primary">
                <Button size="small"><ArrowBackIosTwoToneIcon /></Button>
                <Button size="small"><ExitToAppIcon /></Button>
              </ButtonGroup>
            </ThemeProvider>
          </Toolbar>
        </AppBar>

        <Grid container direction="row" sx={{marginTop:'7px'}}>
        <ThemeProvider theme={themeHome}>
          <Grid item xs={5} component='main'>
            <Stack spacing={2} direction="row" margin="3vh" >
              <Button variant="contained" onClick={ListarDesayuno} size="small" sx={{ borderRadius: '30px', backgroundColor: '#fff', color: 'black', border: '3px solid #683524' }} >
                DESAYUNO
              </Button>
              <Button variant="contained" onClick={ListarMenu} size="small" sx={{ borderRadius: '30px', backgroundColor: '#fff', color: 'black', border: '3px solid #683524' }}>
                MENÚ
              </Button>
              <Button variant="contained" onClick={ListarBebidas} size="small" sx={{ borderRadius: '30px', backgroundColor: '#fff', color: 'black', border: '3px solid #683524' }}>
                BEBIDAS
              </Button>
            </Stack>
            <ul style={{marginLeft: '15px'}}>
              {desayunos && (
                desayunos.map((desayuno) => (
                  <li key={desayuno._id}>
                    <Grid container direction='row'>
                      <Grid item xs={7}>
                        <Button color="secondary">{desayuno.name}</Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button color="primary" >S/.{desayuno.price}</Button>
                      </Grid>
                    </Grid>
                  </li>
                ))
              )}
            </ul>
            <ul style={{marginLeft: '15px'}}>
              {menu && (
                menu.map((menus) => (
                  <li key={menus._id}>
                    <Grid container direction='row'  >
                      <Grid item xs={7}>
                        <Button color="secondary" >{menus.name}</Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button color="primary" >S/.{menus.price}</Button>
                      </Grid>
                    </Grid>
                  </li>
                ))
              )}
            </ul>
            <ul style={{marginLeft: '15px'}}>
              {bebidas && (
                bebidas.map((bebida) => (
                  <li key={bebida._id}>
                    <Grid container direction='row' >
                      <Grid item xs={7}>
                        <Button color="secondary" >{bebida.name}</Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button color="primary" >S/.{bebida.price}</Button>
                      </Grid>
                    </Grid>
                  </li>
                ))
              )}
            </ul>
          </Grid>
        </ThemeProvider>
          <Grid item xs={7} component='main' sx={{ backgroundColor: 'rgba(1 1 1 / 34%)'}}>
            <Pedidos className={classe.containerOrderList} />
          </Grid>
        </Grid>
      </Box>
    </Box>
    // </ThemeProvider> 
  );
}


