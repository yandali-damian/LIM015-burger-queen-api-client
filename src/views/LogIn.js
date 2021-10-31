import React, { useState } from 'react';
import { Button, Box, Container, Grid, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material';
import { useHistory } from 'react-router';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import cintaLogin from '../img/cintaLogIn.png';
// Config de estilos MUI
import { useStyles, theme } from '../style/styleLogin.js';
import { ThemeProvider } from '@mui/material/styles';
// Para el alerta
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogIn() {
    const classes = useStyles();
    const history = useHistory();
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
        // console.log(55, response);//token
        if(response.message) {
            mensaje(response.message);
        }else if(response.token){
            // console.log('mensaje', res.message);
            // console.log(data);
            localStorage.setItem('user', login.email);
            history.push('/customers');
        }

    };

    const mensaje=(mensaje)=>{
        toast.error(mensaje +'🍔!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }  

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
                            <FormControl variant="outlined" className={classes.inputValue}>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <OutlinedInput
                                    role="emailInput"
                                    id="email"
                                    type="text"
                                    label="Email"
                                    name="email"
                                    autoFocus
                                    sx={{ borderRadius: '80px', px: 2 }}
                                />
                            </FormControl>

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
                                    name="password"
                                    sx={{ borderRadius: '80px', px: 2 }}
                                />
                            </FormControl>
                            <Button
                                color="secondary"
                                type="submit"
                                variant="contained"
                                sx={{ mt: 8, mb: 2, width: '80%', height: '45px', borderRadius: '30px', pt: 4, pb: 4 }}
                                
                            >
                                Ingresar
                            </Button>
                            <ToastContainer/>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}