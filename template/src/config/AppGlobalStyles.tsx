import GlobalStyles from "@mui/material/GlobalStyles";
import { darken } from "@mui/system";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";

export const AppGlobalStyles = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={
        css`
          ::-webkit-scrollbar {
            width: 0.5em;
            height: 0.5em;
            background-color: #f5f5f5;
          }
          ::-webkit-scrollbar-track {
            background-color: ${theme.palette.grey[300]};
          }
          ::-webkit-scrollbar-thumb {
            border-radius: 1em;
            width: 0.75em;
            background-color: ${theme.palette.primary.main};
            &:hover {
              background-color: ${darken(theme.palette.primary.main, 0.2)};
            }
          }
          ::selection {
            color: ${theme.palette.getContrastText(theme.palette.primary.main)};
            background: ${theme.palette.primary.main};
          }
          body,
          html {
            scrollbar-width: "thin";
            scrollbar-color: ${theme.palette.primary.main +
            " " +
            theme.palette.background.default};
          }
          svg {
            fill: currentColor;
          }
          body,
          #app,
          #root {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: stretch;

            & > * {
              flex: 1 1 100%;
            }

            header {
              flex: 0 1 100%;
              z-index: ${theme.zIndex.drawer + 1};
            }

            main {
              flex: 1 1 100%;
              display: flex;
              position: relative;
            }
          }
          strong,
          strong.MuiTypography-root {
            font-weight: 900;
          }
        `.styles
      }
    />
  );
};
