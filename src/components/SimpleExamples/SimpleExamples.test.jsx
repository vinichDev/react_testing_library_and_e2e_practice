import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleExamples from './SimpleExamples';


describe('EXAMPLES', () => {
    test('renders learn react link', () => {
        render(<SimpleExamples/>);
        // const helloWorldElem = screen.queryByText(/hello2/i);
        // expect(helloWorldElem).toBeNull()
        const helloWorldElem = screen.getByText(/hello world/i);
        const buttonElem = screen.getByRole('button');
        const inputElem = screen.getByPlaceholderText(/input value/i);
        expect(helloWorldElem).toBeInTheDocument();
        expect(buttonElem).toBeInTheDocument();
        expect(inputElem).toMatchSnapshot();
    });

    test('async test', async () => {
        render(<SimpleExamples/>);
        screen.debug();
        const dataElem = await screen.findByText(/data/i);
        expect(dataElem).toBeInTheDocument();
        expect(dataElem).toHaveStyle({color: 'red'});
        screen.debug();
    });

    test('click event',  () => {
        render(<SimpleExamples/>);
        const toggleBtnElem = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
        fireEvent.click(toggleBtnElem)
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(toggleBtnElem)
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
    });

    test('input event',  async() => {
        const user = userEvent.setup();
        render(<SimpleExamples/>);
        const inputElem = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('')
        // Искусственное событие
        // fireEvent.input(inputElem, {
        //     target: {value: '123123'}
        // })
        // Близко к пользовательскому событию
        await user.type(inputElem, '123123')
        expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
    });
});
