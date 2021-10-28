// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Typography, Box, Container, Grid, FormHelperText, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import cintaLogin from '../img/cintaLogIn.png';
// alerta
// eslint-disable-next-line no-unused-vars
import { AlertForm } from '../views/AlertForm.js'
import { useHistory } from 'react-router';
import { useStyles, theme } from '../style/styleLogin.js';

export default function LogIn() {
    const classes = useStyles();
    const history = useHistory();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [leyendaEmail, setLeyendaEmail] = useState('');
    const [leyendaPass, setLeyendaPass] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [notUserFound, setNotUserFound] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowPass] = useState(false);

    const handleChange = () => (event) => {
        setPassword(event.target.showpass);
    };

    const handleClickShowPassword = () => {
        setShowPass(!showpass);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const login = {
            email: data.get('email'),
            password: data.get('password'),
        };

        let response = await fetch('https://burguer-queen-api-lim015.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(login)
        });
        response = await response.json();
        console.log(55, response);

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
                        <Typography>{notUserFound}</Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate className={classes.componentForm} >
                            <img className={classes.headTittle} src={cintaLogin} alt='Header Title' />
                            <FormControl variant="outlined" className={classes.inputValue}>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    type="text"
                                    label="Email"
                                    error={emailError}
                                    name="email"
                                    autoFocus
                                    sx={{ borderRadius: '80px', px: 2 }}
                                />
                            </FormControl>
                            <FormHelperText
                                error={emailError}
                            >
                                {leyendaEmail}
                            </FormHelperText>

                            <FormControl variant="outlined" className={classes.inputValue} sx={{ mt: 4 }}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showpass ? "text" : "password"}
                                    defaultValue={password}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showpass ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    error={passwordError}
                                    name="password"
                                    sx={{ borderRadius: '80px', px: 2 }}
                                />
                            </FormControl>
                            <FormHelperText
                                error={passwordError}
                            >
                                {leyendaPass}
                            </FormHelperText>
                            <Button
                                color="secondary"
                                type="submit"
                                variant="contained"
                                sx={{ mt: 8, mb: 2, width: '80%', height: '45px', borderRadius: '30px', pt: 4, pb: 4 }}
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