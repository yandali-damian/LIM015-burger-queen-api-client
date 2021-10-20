import React from 'react';
import portada1 from '../img/portada1.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FB970E',
        },
        secondary: {
            main: '#9CDD2B',
        },
    },
});

export default function LogIn() {
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
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <ThemeProvider theme={theme}>
                {<figure>
                    <img src={portada1} alt="Hamburguesa Portada" />
                </figure>}
                <Container component="main" maxWidth="xs">
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            color="secondary"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ingresar
                        </Button>
                    </Box>
                </Container>
            </ThemeProvider>
        </Grid>
    )
}