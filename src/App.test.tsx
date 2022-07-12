import React from 'react';
import { render } from '@testing-library/react';
import { store } from './store'
import App from './App';


import { Provider } from 'react-redux';

describe('Try open app', () => {
    const { container } = render(<App />)

    it('OpenApp', () => {
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(container.firstChild).not.toBeNull();
    });
});