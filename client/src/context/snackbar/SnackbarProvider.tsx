import {
  AlertColor,
  AlertProps,
  Slide,
  Snackbar,
  SnackbarCloseReason,
  SnackbarOrigin,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { forwardRef, useState } from "react";
import { DEFAULT_ALERT_DURATION } from "utils/constants";
import showAlert from "utils/showAlert";
import SnackbarContext from "./SnackbarContext";

const INITIAL_ALERT_COLOR = "success";
const SBAR_ANCHOR_ORIGIN: SnackbarOrigin = {
  vertical: "top",
  horizontal: "center",
};

const snackbarStyle = { width: "100%" };

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
Alert.displayName = "Alert";

const SnackbarProvider = (props: ProviderPropsI): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>(INITIAL_ALERT_COLOR);

  const showSnackbar = (type: AlertColor, message: string) => {
    showAlert(setSeverity, type, setMessage, message);
    setOpen(true);
  };

  const handleSnackbarClose = (
    _event?: React.SyntheticEvent<unknown, Event>,
    reason?: SnackbarCloseReason
  ): void => {
    if (reason !== "clickaway") {
      setOpen(false);
    }
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar: showSnackbar }}>
      <Snackbar
        anchorOrigin={SBAR_ANCHOR_ORIGIN}
        open={open}
        autoHideDuration={DEFAULT_ALERT_DURATION}
        onClose={handleSnackbarClose}
        TransitionComponent={Slide}>
        <Alert
          onClose={handleSnackbarClose}
          severity={severity}
          sx={snackbarStyle}>
          {message}
        </Alert>
      </Snackbar>
      {props.children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;