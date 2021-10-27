import React from 'react'
import { Button, Grid, ButtonGroup } from '@mui/material';
import { useStyles } from '../style/styleOrder.js';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function Pedidos() {
    const classes = useStyles();

    const [count, setCount] = React.useState(1);

    return (
        <Grid container direction="column" className={classes.containerOrderList} >
            <Grid item xs={1}>
                <ButtonGroup variant="contained" color="secondary" size="medium">
                    <Button
                        aria-label="quitar"
                        onClick={() => {
                            setCount(Math.max(count - 1, 0));
                        }}
                    >
                        -
                    </Button>
                    <Button>{count}</Button>
                    <Button
                        aria-label="añadir"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        +
                    </Button>
                </ButtonGroup>
                <span className={classes.orderMenu}>Pedido</span>
                <DeleteForeverIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item xs={1}>
                <ButtonGroup variant="contained" color="success" size="medium">
                    <Button
                        aria-label="quitar"
                        onClick={() => {
                            setCount(Math.max(count - 1, 0));
                        }}
                    >
                        -
                    </Button>
                    <Button>{count}</Button>
                    <Button
                        aria-label="añadir"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        +
                    </Button>
                </ButtonGroup>
                <span className={classes.orderMenu}>Pedido</span>
                <DeleteForeverIcon sx={{ fontSize: 40 }} />
            </Grid>

        </Grid>
    )
}

