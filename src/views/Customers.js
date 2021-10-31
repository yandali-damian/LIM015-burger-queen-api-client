import React /* { useState } */ from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Grid, Container } from '@mui/material';
import { useHistory } from 'react-router';
import { useStyles } from '../style/styleCustomers.js';
import logo1 from '../img/logo1.png';
import headerMesas from '../img/mesas.png';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Customers() {
    const classes = useStyles();
    const history = useHistory();
    // const [selMesa, setSelMesa] = useState('');
    const mesitas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const showMesitas = (arrayMesas) => {
        const paintMesas = arrayMesas.map((mesa) => {
            return (
                <Grid item xs={1} md={1}>
                    <Box
                        id={mesa}
                        onClick={saveNumMesa}
                        // onClick={changeBackground}
                        className={classes.miniBox}
                    >
                        {mesa}
                    </Box>
                </Grid>
            )
        })
        return paintMesas
    }
    
    const saveNumMesa = (event) => {
        console.log('Mesa seleccionada: ', event.target.id);
        // localStorage.setItem(event.target.id, event.target.id);
        history.push('/home');
        // setSelMesa(event.target.id)
    }

    return (
        <Box className={classes.fondoHome}>
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
                    <Typography component="div" sx={{ flexGrow: 0.1 }}>
                        {localStorage.getItem('user')}
                    </Typography>
                    <ExitToAppIcon />
                </Toolbar>
            </AppBar>

            <Container className={classes.wrapperGrid}>
                <img className={classes.headerMesas} src={headerMesas} alt='Header Title' />
                <Grid container columns={{ xs: 4, sm: 8, md: 5 }} className={classes.containerGrid}>
                    {showMesitas(mesitas)}
                </Grid>
            </Container>
        </Box>
    )
}

