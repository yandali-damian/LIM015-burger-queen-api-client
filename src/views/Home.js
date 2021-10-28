import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Stack, Button } from '@mui/material';
import {useStyles} from '../style/styleHome.js';
import logo1 from '../img/logo1.png';


export default function Home() {

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
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography  component="div" sx={{ flexGrow: 0.1 }}>
            {localStorage.getItem('user')}
          </Typography>
          <ExitToAppIcon />
        </Toolbar>
      </AppBar>

      <Stack spacing={2} direction="row" margin="3vh" >
        <Button variant="contained" size="large" sx={{ borderRadius: '30px', backgroundColor:'#fff', color:'black', border: '3px solid #683524'}} >
          DESAYUNO
        </Button>
        <Button  variant="contained" size="large" sx={{ borderRadius: '30px', backgroundColor:'#fff', color:'black', border: '3px solid #683524'}}>
          ALMUERZO Y CENA
        </Button>
      </Stack>

    </Box>
    </Box>
    // </ThemeProvider>
    );
}


