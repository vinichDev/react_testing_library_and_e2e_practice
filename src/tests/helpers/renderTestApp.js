import { createReduxStore } from '../../store/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../pages/router/AppRouter';

const renderTestApp = (component, options) => {
    const store = createReduxStore(options?.initialState);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    );
};

export default renderTestApp;
