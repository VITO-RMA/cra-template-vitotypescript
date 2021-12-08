import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { SnackbarKey, SnackbarProvider } from "notistack";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { AppPage } from "./AppPage";

export const RootPage = () => {
  const notistackRef = useRef<SnackbarProvider | null>(null);

  function onClickDismiss(key: SnackbarKey) {
    if (notistackRef !== null && notistackRef.current !== null) {
      notistackRef.current.closeSnackbar(key);
    }
  }

  return (
    <SnackbarProvider
      maxSnack={3}
      ref={notistackRef}
      action={(key: SnackbarKey) => (
        <IconButton
          style={{ color: "#fff" }}
          onClick={() => onClickDismiss(key)}
        >
          <Close />
        </IconButton>
      )}
    >
      <Routes>
        <Route path="/" element={<AppPage />} />
      </Routes>
    </SnackbarProvider>
  );
};
