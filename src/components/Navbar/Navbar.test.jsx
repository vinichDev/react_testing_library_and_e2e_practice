import renderWithRouter from '../../tests/helpers/renderWithRouter';
import {screen } from '@testing-library/react';
import Navbar from './Navbar';
import userEvent from '@testing-library/user-event';

describe('NAVBAR TEST', () => {
    test('test main link', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Navbar />);

        const mainLink = screen.getByTestId('main-link');
        await user.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
    test('test about link', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Navbar />);

        const aboutLink = screen.getByTestId('about-link');
        await user.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
    test('test users link', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Navbar />);

        const usersLink = screen.getByTestId('users-link');
        await user.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
});