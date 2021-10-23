import React from 'react';
import fondoPortada from '../img/portada2.png';
import { Grid } from '@mui/material';

export default function LogInForm() {
    // const [state, setstate] = useState(null);
    
    return (
        <Grid container>
            <Grid item xs={6}>
                <img src={fondoPortada} alt='Burguer Cover' />
            </Grid>
            <Grid item xs={6}>
                <form>
                    <legend>Iniciar sesión</legend>
                    <input type='text' placeholder='Nombre' required /><br />
                    <input type='password' placeholder='Contraseña' required /><br />
                    <button /* onClick={submitData} */>Ingresar</button>
                </form>
            </Grid>
        </Grid>
    )
}

// const useStyles =makeStyles(theme=>({
//     root:{
//         backgroundColor:'#000',
//         width:'100vh',
//         height:'100vh',
//     },
//     fotoPortada:{
//         backgroundImage:`url(${fondoPortada})`,
//         backgroundRepeat:'no-repeat',
//         width:'100vh',
//         height:'100vh',
//         backgroundSize:'100vh 100vh',
//     }

// }))