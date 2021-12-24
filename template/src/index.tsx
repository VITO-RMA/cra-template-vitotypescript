import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CircularProgress } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { theme } from "./config/theme";
import { RootPage } from "./pages/RootPage";
import { AppGlobalStyles } from "./config/AppGlobalStyles";
import { GlobalErrorFallBack } from "./components/boundary/GlobalErrorFallBack";

import reportWebVitals from "./reportWebVitals";

import { bootstrap } from "./config/bootstrap";

bootstrap();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<CircularProgress />}>
        <CssBaseline />
        <AppGlobalStyles />
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary FallbackComponent={GlobalErrorFallBack}>
            <BrowserRouter>
              <RootPage />
            </BrowserRouter>
          </ErrorBoundary>
        </QueryClientProvider>
      </Suspense>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
