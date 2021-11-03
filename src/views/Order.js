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

import { getProducts } from '../services/Product.js';

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

// const arrayPedidos = [];

export default function Pedidos() {
    const classe = useStyle();
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState([]);

    const ListarProductos = () => {
        getProducts('desayuno').then((producto) => {
            console.log(41, producto);
            setProducts(producto);
        });
    }
    ListarProductos()

    const AgregarPedido = item => {
        // Condición filter si existe que ya no se agreguen
        if (products.indexOf(item) === -1) {
            products.push(item)
            console.log(products)
            // document.querySelector('.spanPedidos').textContent = arrayPedidos
        }
    }
    AgregarPedido('Agua')

    return (
        <>
            <Grid container direction="row" className={classe.containerOrderList}>
                <Grid item xs={4} justifyContent="center">
                    <input placeholder='Nombre del cliente' style={{ color: '#000', background: '#fff', borderRadius: '20px', padding: '12px' }} />
                </Grid>
                <Grid item xs={8} >
                    <h1 style={{ color: '#fff', textAlign: 'center' }}>Lista de Pedidos</h1>
                </Grid>
            </Grid>

            <Grid container direction="row" className={classe.containerOrderList}>
                <Grid item xs={4}>
                    <ThemeProvider theme={themeHome}>
                        <Box sx={{ "& > :not(style)": { m: 0.2 } }}>
                            <Fab size="small" color="primary" aria-label="quitar" onClick={() => {
                                setCount(Math.max(count - 1, 0));
                            }}>
                                -
                            </Fab>
                            <input style={{ color: '#000', background: '#fff', borderRadius: '7px', padding: '12px', width: '20px' }} />
                            <Fab size="small" color="primary" aria-label="añadir" background="#FB970E" onClick={() => {
                                setCount(count + 1);
                            }}>
                                +
                            </Fab>
                        </Box>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={6}>
                    <span className={classe.orderMenu}>Agua s/.2.50</span>
                </Grid>
                <Grid item xs={2}>
                    <DeleteForeverIcon className={classe.btnDelete} />
                </Grid>
                <Grid item xs>
                    <Grid item xs={7}>
                        <span className={classe.orderMenu}>Hamburguesa s/.5.00</span>
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
            </Grid>
        </>
    )
}

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