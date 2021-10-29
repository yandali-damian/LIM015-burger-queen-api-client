import React from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Grid, Container } from '@mui/material';
import { useStyles } from '../style/styleCustomers.js';
import logo1 from '../img/logo1.png';
import headerMesas from '../img/mesas.png';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Customers() {
    const classes = useStyles();

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
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            01
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            02
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            03
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            04
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            05
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            06
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            07
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            08
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            09
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            10
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            11
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Box
                            className={classes.miniBox}>
                            12
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

