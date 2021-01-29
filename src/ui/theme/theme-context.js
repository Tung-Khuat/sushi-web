import React from 'react';

export const themes = {
    colorTheme1:  {
        background: "#fff",
        lightest: "#fff",
        secondaryLight: "#e2e2e2",
        secondaryDark: "#81171b",
        darkest: "#212121",
        highlight: "#b72f33",
        paletteArray: [ "#81171b", "#b72f33", "#e2e2e2", "#fff", "#212121"],
    },
}

export const ThemeContext = React.createContext({
    theme: themes.colorTheme1,
    switchTheme: () => {},
});


