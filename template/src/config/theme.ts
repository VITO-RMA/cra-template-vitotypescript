import {
  createTheme,
  ThemeOptions,
  SimplePaletteColorOptions,
} from "@mui/material/styles";
import { CommonColors } from "@mui/material/styles/createPalette";

interface TextColors {
  primary: string;
  secondary: string | undefined;
  disabled: string;
  hint: string;
}

export const theme = ((options: ThemeOptions) => {
  const sansFont =
    "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;";
  const borderRadius: number = 4;
  const commonColors: CommonColors = {
    black: "#000",
    white: "#fff",
  };
  const primary: SimplePaletteColorOptions = {
    main: "#32a2db",
    contrastText: commonColors.white,
  };
  const secondary: SimplePaletteColorOptions = {
    main: "#f68121",
    contrastText: commonColors.white,
  };
  const success: SimplePaletteColorOptions = {
    light: "rgb(93 ,190 ,85)",
    main: "rgb(75 ,161 ,68)",
    dark: "rgb(43 ,91 ,37)",
    contrastText: commonColors.black,
  };
  const error: SimplePaletteColorOptions = {
    light: "rgb(230 ,49 ,31)",
    main: "#C63131",
    dark: "rgb(145 ,45 ,45)",
    contrastText: commonColors.white,
  };
  const warning: SimplePaletteColorOptions = {
    light: "rgb(183 ,171 ,31)",
    main: "rgb(150 ,140 ,25)",
    dark: "rgb(108 ,101 ,18)",
    contrastText: commonColors.white,
  };
  const text: TextColors = {
    primary: "rgba(0, 0, 0, 1)",
    secondary: "rgba(0, 0, 0, 0.8)",
    disabled: "rgba(0, 0, 0, 0.4)",
    hint: "rgba(0, 0, 0, 0.4)",
  };

  return createTheme({
    palette: {
      primary,
      secondary,
      text,
      success,
      warning,
      error,
      background: {
        paper: commonColors.white,
        default: commonColors.white,
      },
      common: commonColors,
    },
    typography: {
      fontFamily: sansFont,
    },
    shape: {
      borderRadius: borderRadius,
    },
    components: {
      MuiCssBaseline: {
        // styleOverrides: {
        //   "@font-face": fontFaces,
        // },
      },
    },
    ...options,
  });
})({});
