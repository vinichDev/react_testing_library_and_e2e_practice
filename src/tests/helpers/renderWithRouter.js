import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../pages/router/AppRouter';
import { render } from '@testing-library/react';

const renderWithRouter = (component, initialRoute = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )
};

export default renderWithRouter
