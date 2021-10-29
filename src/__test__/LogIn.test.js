import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LogIn from '../views/LogIn'

test('has correct input value', () => {
    render(<LogIn />)
    // console.log(screen.getByRole('textbox'))
    expect(screen.getByRole('textbox')).toHaveBeenCalledTimes(2)
})
