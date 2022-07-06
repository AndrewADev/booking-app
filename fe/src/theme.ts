import { createTheme } from "@mui/material/styles";

// See:  https://mui.com/material-ui/customization/theming/#custom-variables
declare module "@mui/material/styles" {
  interface Theme {
    pallete?: {
      primary?: {
        main: string;
      };
      secondary?: {
        main: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    pallete?: {
      primary?: {
        main: string;
      };
      secondary?: {
        main: string;
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D3A284",
    },
  },
});
