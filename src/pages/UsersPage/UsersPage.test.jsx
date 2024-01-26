import UsersPage from './UsersPage';
import { screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('USERS TEST', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    'id': 1,
                    'name': 'Leanne Graham',
                },
                {
                    'id': 2,
                    'name': 'Ervin Howell',
                },
                {
                    'id': 3,
                    'name': 'Clementine Bauch',
                },
            ]
        };
        axios.get.mockReturnValue(response);
    });

    test('axios test', async () => {
        renderWithRouter(<UsersPage />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    });

    test('test redirect to details page', async () => {
        const user = userEvent.setup();
        renderWithRouter(null, '/users');
        const users = await screen.findAllByTestId('user-item');
        await user.click(users[0]);
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});