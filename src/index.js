import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store'
import { StylesProvider } from '@material-ui/core/styles';
import App from './ui/app'
import GlobalStyle from './ui/styled-components/global-styles';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StylesProvider injectFirst>
                <GlobalStyle />
                <App/>
            </StylesProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('App'),
);

reportWebVitals()