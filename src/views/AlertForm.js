// import * as React from 'react'
// import {Alert} from 'mui-extension'

// export const AlertForm = () => {
//   return (
//     <>
//       <Alert deletable type="error">Ingrese sus <b>datos</b></Alert>
//     </>
//   )
// }


// Petición con axios
/* axios.post('https://burguer-queen-api-lim015.herokuapp.com/auth', login)
            .then(response => JSON.stringify(login))
            .then(res => {
                console.log('mensaje', res.message);
                localStorage.setItem('user', login.email);
                localStorage.setItem('token', res.data.token);
                history.push('/home');
            })
            .catch(err => {
                console.log(53, err.message)
                if (err.message === 'Request failed with status code 400') {
                    alert('Por favor ingrese los datos')
                    // Validación de inputs
                    if (login.email === '') {
                        setEmailError(true)
                        setLeyendaEmail('Debe completar este campo.')
                    } else {
                        setEmailError(false)
                        setLeyendaEmail('')
                    }
                    if (login.password === '') {
                        setPasswordError(true)
                        setLeyendaPass('Debe completar este campo.')
                    } else {
                        setLeyendaPass('')
                        setPasswordError(false)
                    }
                } else if (err.message === 'Request failed with status code 404') {
                    alert('Este usuario no se encuentra en la Base de Datos')
                    setNotUserFound('El usuario no se encuentra registrado.')
                } else {
                    console.log('otro error ==> ', err.message);
                }
            }); */