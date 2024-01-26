import { render } from '@testing-library/react';
import { createReduxStore } from '../../store/store';
import { Provider } from 'react-redux';

const renderWithRedux = (component, initialState = {}) => {
    const store = createReduxStore(initialState)

    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

export default renderWithRedux;