import React, { useState } from 'react'
import { Button, Grid, ButtonGroup, Box } from '@mui/material';
import { useStyles } from '../style/styleOrder.js';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Pedidos() {
    const classes = useStyles();
    const [count, setCount] = useState(1);

    const pedidos = ['hamburguesa', 'gaseosa', 'agua', 'cheese burger']

    const selectOrder = (arrayMenu) => {
        const enterOrder = arrayMenu.filter((item) => {
            if (item.indexOf('agua') !== -1) {
                return item
            } else {
                return ''
            }
        })
        return enterOrder
    }
    console.log(17, selectOrder(pedidos))

    return (
        <Box sx={{ width: '50%' }}>
            <Grid container direction="row" className={classes.containerOrderList} >
                <Grid item xs>
                    <ButtonGroup variant="contained" color="primary" size="medium">
                        <Button
                            aria-label="añadir"
                            onClick={() => {
                                setCount(count + 1);
                            }}
                        >
                            +
                        </Button>
                        <Button>{count}</Button>
                        <Button
                            aria-label="quitar"
                            onClick={() => {
                                setCount(Math.max(count - 1, 0));
                            }}
                        >
                            -
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                    <span className={classes.orderMenu}>{selectOrder(pedidos)}</span>
                </Grid>
                <Grid item xs>
                    <DeleteForeverIcon className={classes.btnDelete} />
                </Grid>
            </Grid>
        </Box>
    )
}

