import React, { useState } from 'react'
import { Button, Grid, Stack } from '@mui/material';
import { useStyle } from '../style/styleOrder.js';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import send from '../img/sendButton.png';

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
    console.log(17, selectOrder(pedidos))

    return (
        <>
            <Grid container direction="row" className={classe.containerOrderList}>
                <Grid item xs={5}>
                    <h2 style={{ color: '#000', background: '#fff', borderRadius: '20px', padding: '15px' }}>N° 10</h2>
                </Grid>
                <Grid item xs={7}>
                    <h1 style={{ color: '#fff' }}>Lista de Pedidos</h1>
                </Grid>
            </Grid>
            <Grid container direction="row" className={classe.containerOrderList}>
                <Grid item xs>
                    <Stack direction="row">
                        <Button
                            sx={{ borderRadius: '50px', background: '#fff', color: '#000', padding: '0', fontSize: '30px' }}
                            aria-label="añadir"
                            onClick={() => {
                                setCount(count + 1);
                            }}
                        >
                            +
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: '50px', color: '#fff', padding: '0', fontSize: '30px' }}
                        >
                            {count}
                        </Button>
                        <Button
                            sx={{ borderRadius: '50px', background: '#fff', color: '#000', padding: '0', fontSize: '30px' }}
                            aria-label="quitar"
                            onClick={() => {
                                setCount(Math.max(count - 1, 0));
                            }}
                        >
                            -
                        </Button>
                    </Stack>
                </Grid>
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

