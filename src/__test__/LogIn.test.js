import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LogIn from '../views/LogIn'

describe('<LogIn />', () => {
    it('Debería mostrar el botón ingresar en la pantalla', () => {
        render(<LogIn />);
        const btnElement = screen.getByText(/ingresar/i);
        expect(btnElement).toBeInTheDocument();
    });
    it('Debería mostrar el valor del elemento con el atributo role="email"', () => {
        render(<LogIn />);
        const roleEmailInput = screen.getByRole('emailInput');
        expect(roleEmailInput.textContent).toContain('Email')
    });
    test('Debería mostrar el valor del input relacionado al elemento label "Password"', () => {
        render(<LogIn />)
        const labelInputPassword = screen.getByLabelText('Password')
        expect(labelInputPassword.textContent).toContain('')
    })

})
