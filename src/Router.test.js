import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('TEST APP', () => {
    test('router test', async () => {
        const user = userEvent.setup();
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        await user.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        await user.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('error page test', () => {
        render(
            <MemoryRouter initialEntries={['/123123']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });
});