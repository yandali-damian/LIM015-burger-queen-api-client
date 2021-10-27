import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import fondoPortada from '../img/portada1.png';

export const useStyles = makeStyles(theme => ({
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
        borderRadius: '80px',
        width: '80%'
    },
}))

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FB970E',
        },
        secondary: {
            main: '#9CDD2B',
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