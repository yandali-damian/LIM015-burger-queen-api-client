import React, { useState } from 'react'
import { Button, Grid } from '@mui/material';
import { useStyle } from '../style/styleOrder.js';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import send from '../img/sendButton.png';

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
// import { theme } from '../style/styleLogin.js';

const themeHome = createTheme({
    palette: {
        primary: {
            main: "#9CDD2B"
        },
        tamaño: {
            with: '10',
            height: '10',
            border: '50%'
        }
    },
    typography: {
        fontSize: 15,
        fontFamily: ["Arial"]
    }
});

const handleSubmit = async () => {

    const response = await fetch('https://burguer-queen-api-lim015.herokuapp.com/orders', {
        method: 'GET',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    const data = await response.json();
    return data.filter((item) => {
        return item.products.map((el) => {
            const currentOrder = {
                'client': item.client,
                'order': el.productId.name,
                'price': el.productId.price
            }
            console.log({
                'client': item.client,
                'order': el.productId.name,
                'price': el.productId.price
            })
            return currentOrder
        })
        // console.log(39, item.products)
        // return item._id;
        // return producto.type === tipoProducto;
    });
    // console.log(42, result) // Array de objetos (lo mismo que línea 37)
}
console.log(44, handleSubmit()) // Promesa pendiente

export default function Pedidos() {
    const classe = useStyle();
    const [count, setCount] = useState(1);

    const pedidos = ['hamburguesa', 'gaseosa', 'Agua', 'cheese burger']

    const selectOrder = (arrayMenu) => {
        const enterOrder = arrayMenu.filter((item) => {
            if (item.indexOf('Agua') !== -1) {
                return item
            } else {
                return ''
            }
        })
        return enterOrder + ' s/. 2.50'
    }
    // console.log(17, selectOrder(pedidos))

    return (
        <>
            <Grid container direction="row" className={classe.containerOrderList}>
                <Grid item xs={4} justifyContent="center">
                    <input placeholder='Nombre' style={{ color: '#000', background: '#fff', borderRadius: '20px', padding: '12px' }} />
                </Grid>
                <Grid item xs={8} >
                    <h1 style={{ color: '#fff', textAlign: 'center' }}>Lista de Pedidos</h1>
                </Grid>
            </Grid>

            <Grid container direction="row" className={classe.containerOrderList}>
                <ThemeProvider theme={themeHome}>
                    <Box sx={{ "& > :not(style)": { m: 0.2 } }}>
                        <Fab size="small" color="primary" aria-label="añadir" background="#FB970E" onClick={() => {
                            setCount(count + 1);
                        }}>
                            +
                        </Fab>
                        <Fab size="small" color="#fff" variant="contained">
                            {count}
                        </Fab>
                        <Fab size="small" color="primary" aria-label="quitar" onClick={() => {
                            setCount(Math.max(count - 1, 0));
                        }}>
                            -
                        </Fab>
                    </Box>
                </ThemeProvider>
                <Grid item xs={7}>
                    <span className={classe.orderMenu}>{selectOrder(pedidos)}</span>
                </Grid>
                <Grid item xs>
                    <DeleteForeverIcon className={classe.btnDelete} />
                </Grid>
            </Grid>

            <Grid container direction="row" className={classe.containerOrderList} sx={{ justifyContent: 'space-around' }}>
                <Button
                    variant="outlined"
                    sx={{ borderRadius: '30px', color: '#fff', px: '50px', py: '15px', fontSize: '25px', background: '#000', border: '5px solid #9CDD2B' }}
                >
                    Pedir
                    <img style={{ paddingLeft: '10px', height: '35px' }} src={send} alt="Botón enviar" />
                </Button>
            </Grid>
        </>
    )
}

