import { render, screen } from '@testing-library/react';
import Login from '../src/pages/login'

test('renders the login page', () => {
    render(<Login />)
})