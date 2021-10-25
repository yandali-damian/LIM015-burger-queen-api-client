import axios from 'axios';
import React, { useState } from 'react';
import { TextField, Button, Box, Container, Grid, FormHelperText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import fondoPortada from '../img/portada1.png';
import cintaLogin from '../img/cintaLogIn.png';
// alerta
// eslint-disable-next-line no-unused-vars
import { AlertForm } from '../views/AlertForm.js'
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vh',
        height: '100vh',
    },
    fotoPortada: {
        backgroundImage: `url(${fondoPortada})`,
        backgroundRepeat: 'no-repeat',
        width: '100vh',
        height: '100vh',
        backgroundSize: '100vh 100vh',
    },
    headTittle: {
        position: 'absolute',
        marginTop: '-28vh'
    },
    componentForm: {
        height: '55vh',
        border: '5px solid #FB970E;',
        borderRadius: '30px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
    typography: {
        body1: {
            fontWeight: 500,
        },
        fontSize: 24,
        fontFamily: [
            'Averia Libre',
        ]
    }
});

export default function LogIn() {
    const classes = useStyles();
    const history = useHistory();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [leyendaEmail, setLeyendaEmail] = useState('')
    const [leyendaPass, setLeyendaPass] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const login = {
            email: data.get('email'),
            password: data.get('password'),
        };

        axios.post('https://burguer-queen-api-lim015.herokuapp.com/auth', login)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                history.push('/home');
            })
            .catch(err => {
                console.log(err);
                alert('Usuario no autorizado.')
            });

        // Validación de inputs
        if (login.email === '') {
            // alert('ingrese los datos!!');
            // <AlertForm/>
            setEmailError(true)
            setLeyendaEmail('Debe completar este campo.')
        } else {
            setEmailError(false)
            setLeyendaEmail('')
        }
        if (login.password === '') {
            setPasswordError(true)
            setLeyendaPass('Debe completar este campo.')
        } else {
            setLeyendaPass('')
            setPasswordError(false)
        }

        // console.log(114, (new RegExp(/^\S+@\S+\.\S+$/)).test('admin@localhost'))
    };

    return (
        <ThemeProvider theme={theme} >
            <Grid container direction="row" alignItems="center" sx={{ background: 'black' }}>
                <Grid item xs={6} component='main' className={classes.root}>
                    <Grid className={classes.fotoPortada}>
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <Container component="main" >
                        <Box component="form" onSubmit={handleSubmit} noValidate className={classes.componentForm} >
                            <img className={classes.headTittle} src={cintaLogin} alt='Header Title' />
                            <TextField
                                error={emailError}
                                margin="normal"
                                required
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                className={classes.inputValue}
                            />
                            <FormHelperText
                                error={emailError}
                            >
                                {leyendaEmail}
                            </FormHelperText>
                            <TextField
                                error={passwordError}
                                margin="normal"
                                required
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                className={classes.inputValue}
                            />
                            <FormHelperText
                                error={passwordError}
                            >
                                {leyendaPass}
                            </FormHelperText>
                            <Button
                                color="secondary"
                                type="submit"
                                variant="contained"
                                sx={{ mt: 8, mb: 4, width: '80%', height: '45px', borderRadius: '30px', pt: 4, pb: 4 }}
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