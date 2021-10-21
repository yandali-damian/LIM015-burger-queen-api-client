import React from 'react';
import portada1 from '../img/portada1.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import fondoPortada from '../img/portada2.png';

const useStyles =makeStyles(theme=>({
    root:{
        width:'100vh',
        height:'100vh',
    },
    fotoPortada:{
        backgroundImage:`url(${fondoPortada})`,
        backgroundRepeat:'no-repeat',
        width:'100vh',
        height:'100vh',
        backgroundSize:'100vh 100vh',
    },
    componentForm:{
        //  paddingTop:200,
        //  padding: '40px 0',
         height: '55vh',
         border: '5px solid #FB970E;',
         borderRadius:'30px',
         display: 'flex',
         flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //  backgroundColor: 'rgba(196, 196, 196, 0.22)',
        //  boxShadow: '0 2px 13px 0 #ffffff',
    },
    inputValue: {
        backgroundColor: '#ffffff',
        border: '5px solid #ffffff',
        borderRadius: '50px',
        width: '80%',
    },
}))

const theme = createTheme({
    palette: {
        primary: {
            main: '#FB970E',
        },
        secondary: {
            main: '#9CDD2B',
            borderRadius: '30px',
        }
    },
});

export default function LogIn() {
    const classes=useStyles()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <ThemeProvider theme={theme} >
        <Grid container direction="row" alignItems="center" sx={{background: 'black'}}>
                <Grid item xs={6} component='main' className={classes.root} >
                    <Grid className={classes.fotoPortada}>
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                <Container component="main" >
                    <Box component="form"  onSubmit={handleSubmit} noValidate className={classes.componentForm} >
                        <TextField
                            margin="normal"
                            required
                            // fullWidth
                            id="email"
                            label="Nombre"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className={classes.inputValue}
                            // sx={{border: '1px solid #C4C4C4'}}
                        />
                        <TextField
                            margin="normal"
                            required
                            // fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className={classes.inputValue}
                        />
                        <Button
                            color="secondary"
                            type="submit"
                            // fullWidth
                            variant="contained"
                            sx={{ mt: 8, mb: 4, width: '80%', height: '45px', borderRadius: '30px', }}
                        >
                            Ingresar
                        </Button>
                    </Box>
                </Container>
                </Grid>
            </Grid>
            </ThemeProvider>
    )
}