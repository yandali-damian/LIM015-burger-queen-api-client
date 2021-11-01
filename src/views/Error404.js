import React from 'react'
import notFound from '../img/404page.jfif'
export default function Error404() {
    return (
        <center>
            <img src={notFound} alt='Página no encontrada' style={{height: '100vh'}} />
        </center>
    )
}
