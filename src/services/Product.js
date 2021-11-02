export async function getProducts(tipoProducto) {

    const response = await fetch('https://burguer-queen-api-lim015.herokuapp.com/products', {
        method: 'GET',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    const data = await response.json();
        return data.filter(producto=>{
            console.log(10, producto)
            return producto.type === tipoProducto;
        });
}

