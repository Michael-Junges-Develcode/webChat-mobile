import {createTheme} from '@material-ui/core/styles';

export interface Theme {
  card: any;
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    textLight: string;
    border: string;
    notification: string;
  };
}

export const DarkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(96, 182, 122)',
    background: 'rgb(15, 15, 17)',
    card: 'rgb(35, 35, 37)',
    text: 'rgb(200, 200, 200)',
    textLight: 'rgb(150, 150, 150)',
    border: 'rgb(46, 46, 49)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(96, 182, 122)',
    background: 'rgb(190, 190, 210)',
    card: 'rgb(220, 220, 230)',
    text: 'rgb(28, 28, 30)',
    textLight: 'rgb(45, 45, 45)',
    border: 'rgb(240, 240, 250)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const materialTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
