import React from 'react';
import { Grid } from '@mui/material';
// import { palette } from '@mui/system';
import { makeStyles } from '@mui/styles';
import fondoPortada from '../img/portada2.png';

const useStyles =makeStyles(theme=>({
    root:{
        backgroundColor:'#000',
        width:'100vh',
        height:'100vh',
    },
    fotoPortada:{
        backgroundImage:`url(${fondoPortada})`,
        backgroundRepeat:'no-repeat',
        width:'100vh',
        height:'100vh',
        backgroundSize:'100vh 100vh',
    }

}))

const LogIn1 = () => {
    const classes=useStyles()
    return (
        <Grid container component='main' className={classes.root}>
            <Grid  className={classes.fotoPortada}>
            </Grid>
        </Grid>
    )
}


export default LogIn1
