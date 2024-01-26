import userEvent from '@testing-library/user-event';
import renderTestApp from '../../tests/helpers/renderTestApp';

describe('COUNTER TEST', () => {
    test('increment', async () => {
        const user = userEvent.setup();
        const {getByTestId} = renderTestApp(null, {
            route: '/',
            initialState: {counter: {value: 11}}
        });
        const incrementBtn = getByTestId('increment-btn');
        expect(getByTestId('count-item')).toHaveTextContent(/^11$/);
        await user.click(incrementBtn);
        expect(getByTestId('count-item')).toHaveTextContent(/^12$/);
    });
});