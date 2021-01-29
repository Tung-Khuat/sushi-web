import React, { Suspense, useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { themes, ThemeContext } from './theme/theme-context';
import { CircularProgress } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

const SushiDisplay = React.lazy(() => 
    import('./sushi'),
);

const AppContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

export default function App() {
    const [themeValue, setCurrentTheme] = useState({
        theme: themes.colorTheme1,
        switchTheme: (newTheme) => switchTheme(newTheme),
    });
    function switchTheme(newTheme) {
        setCurrentTheme((state)=>({
            ...state,
            theme: newTheme
        }));
    };

    return (
        <ThemeContext.Provider value={themeValue}>
            <ThemeProvider theme={themeValue.theme}>
                <SnackbarProvider autoHideDuration={2500} maxSnack={3}>
                    <AppContainer>
                        <div>
                            <Suspense fallback={<CircularProgress />}>
                                <SushiDisplay />
                            </Suspense>
                        </div>
                    </AppContainer>
                </SnackbarProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

