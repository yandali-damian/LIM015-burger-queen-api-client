import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Stack, Button, Grid } from '@mui/material';
import {useStyles} from '../style/styleHome.js';
import logo1 from '../img/logo1.png';
import {getProducts} from '../services/Product.js';


export default function Home() {

  const [desayunos, setDesayunos] = useState([]);
  const [menu, setMenu] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  const ListarDesayuno = () =>{
    // console.log('lista de DESAYUNO');
    getProducts('desayuno').then(producto=>{
      // console.log(producto);
      setBebidas('');
      setMenu('');
      setDesayunos(producto);
    });
  }

  const ListarMenu = () =>{
    // console.log('lista de Menu');
    getProducts('menú').then(producto=>{
      // console.log(producto);
      setDesayunos('');
      setBebidas('');
      setMenu(producto);

    });
  }

  const ListarBebidas = () =>{
    // console.log('lista de Menu');
    getProducts('bebidas').then(producto=>{
      setDesayunos('');
      setMenu('');
      setBebidas(producto);
    });
  }

const classes = useStyles();
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
          <Typography  component="div" sx={{ flexGrow: 0.1 }}>
            {localStorage.getItem('user')}
          </Typography>
          <ExitToAppIcon />
        </Toolbar>
      </AppBar>

      <Grid container direction="row" alignItems="center" >
                <Grid item xs={6} component='main' sx={{backgroundColor: 'rgba(1 1 1 / 34%)'}}>
                  <Stack spacing={2} direction="row" margin="3vh">
                      <Button variant="contained"  onClick={ListarDesayuno}  size="large" sx={{ borderRadius: '30px', backgroundColor:'#fff', color:'black', border: '3px solid #683524'}} >
                        DESAYUNO
                      </Button>
                      <Button  variant="contained" onClick={ListarMenu} size="large" sx={{ borderRadius: '30px', backgroundColor:'#fff', color:'black', border: '3px solid #683524'}}>
                        MENÚ
                      </Button>
                      <Button  variant="contained" onClick={ListarBebidas} size="large" sx={{ borderRadius: '30px', backgroundColor:'#fff', color:'black', border: '3px solid #683524'}}>
                        BEBIDAS
                      </Button>
                   </Stack>
                   <ul style={{color:'white', alignItems:"center"}}>
                          {desayunos && (
                            desayunos.map((desayuno) =>(
                                <li key={desayuno._id}>
                                  <Grid container direction='row' alignItems="center" >
                                    <Button item xs={6}>{desayuno.name}</Button>
                                    <Button item xs={6}>S/.{desayuno.price}</Button>
                                  </Grid>
                                </li>
                            ))
                          )}
                    </ul>
                    <ul style={{color:'white', alignItems:"center"}}>
                          {menu && (
                            menu.map((menus) =>(
                                <li key={menus._id}>
                                  <Grid container direction='row' alignItems="center" >
                                    <Button item xs={6}>{menus.name}</Button>
                                    <Button item xs={6}>S/.{menus.price}</Button>
                                  </Grid>
                                </li>
                            ))
                          )}
                    </ul>
                    <ul style={{color:'white', alignItems:"center"}}>
                          {bebidas && (
                            bebidas.map((bebida) =>(
                                <li key={bebida._id}>
                                  <Grid container direction='row' alignItems="center" >
                                    <Button item xs={6}>{bebida.name}</Button>
                                    <Button item xs={6}>S/.{bebida.price}</Button>
                                  </Grid>
                                </li>
                            ))
                          )}
                    </ul>
                </Grid>
                <Grid item xs={6}>
                  
                </Grid>
      </Grid>
    </Box>
    </Box>
    // </ThemeProvider>
    );
}


