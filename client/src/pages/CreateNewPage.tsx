import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Alert, AlertColor, Collapse, IconButton, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import { SxProps } from "@mui/system";
import Input from "components/common/Input";
import SvgLogo from "components/common/SvgLogo";
import ImageUpload from "components/create-new/custom-image-upload/ImageUpload";
import Tabs from "components/create-new/tabs/Tabs";
import NetworkContext from "context/network/NetworkContext";
import { FormEvent, useContext, useReducer, useState } from "react";
import formReducer from "reducers/formReducer";
import {
  DEFAULT_ALERT_DURATION,
  DEFAULT_ALERT_ELEVATION,
} from "utils/constants";
import showAlert from "utils/showAlert";

const ICON_SIZE = 25;
const DESCRIPTION_ROWS = 4;
const INITIAL_STATE = {
  collectionName: "",
  description: "",
  images: [],
  mintingPrice: 0,
};

const formFooterStyle: SxProps = {
  display: "flex",
  gap: "10px",
  minHeight: 50,
  flexDirection: { xs: "column", sm: "row" },
};
const buttonsWrapperStyle = {
  justifyContent: "flex-end",
  display: "flex",
  gap: "10px",
};

const priceInputProps = (selectedNet: NetworkT) => ({
  inputProps: { min: "0", step: "any" },
  endAdornment: (
    <InputAdornment position="end">
      <SvgLogo icon={selectedNet.icon} width={ICON_SIZE} height={ICON_SIZE} />
    </InputAdornment>
  ),
});

const CreateNewPage = (): JSX.Element => {
  const { selectedNet } = useContext(NetworkContext);
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("success");

  const closeAlert = () => setAlertMessage("");

  const handleImageDelete = (deleteId: string) => {
    dispatch({ type: "DELETE_IMAGE", payload: { deleteId } });
  };

  const handleImgNameChange = (e: InputEventT, id: string) =>
    dispatch({
      type: "CHANGE_IMAGE_NAME",
      payload: { newImgObj: { newImageName: e.target.value, imageId: id } },
    });

  const handleImageDrop = (
    e: React.DragEvent<HTMLLabelElement> | React.ChangeEvent<HTMLInputElement>,
    imgObjs: FileList | null
  ) => {
    e.preventDefault();
    dispatch({
      type: "CHANGE_IMAGES",
      payload: { images: Array.from(imgObjs ?? []) },
    });
  };

  const handleCollNameChange = (e: InputEventT) =>
    dispatch({ type: "CHANGE_NAME", payload: { newName: e.target.value } });

  const handleDescriptionChange = (e: InputEventT) =>
    dispatch({
      type: "CHANGE_DESCRIPTION",
      payload: { description: e.target.value },
    });

  const handleMintPriceChange = (e: InputEventT) =>
    dispatch({ type: "CHANGE_PRICE", payload: { price: e.target.value } });

  const showFormAlert = (severity: AlertColor, message: string) => {
    showAlert(setAlertSeverity, severity, setAlertMessage, message);
    setTimeout(closeAlert, DEFAULT_ALERT_DURATION);
  };

  const handleStateReset = () => {
    dispatch({ type: "RESET_STATE", payload: { initialState: INITIAL_STATE } });
    showFormAlert("info", "Form has been reset");
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
    showFormAlert("error", "You have hit a dead-end");
  };

  const alertBox = (
    <Box flexGrow={1}>
      <Collapse in={alertMessage.length !== 0}>
        <Alert
          elevation={DEFAULT_ALERT_ELEVATION}
          variant="filled"
          severity={alertSeverity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={closeAlert}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          {alertMessage}
        </Alert>
      </Collapse>
    </Box>
  );

  const formButtons = (
    <Box sx={buttonsWrapperStyle}>
      <Button
        startIcon={<ClearIcon />}
        color="error"
        size="large"
        variant="contained"
        type="reset"
        onClick={handleStateReset}>
        Reset
      </Button>
      <Button
        type="submit"
        endIcon={<DoneIcon />}
        color="success"
        size="large"
        variant="contained">
        Submit
      </Button>
    </Box>
  );

  return (
    <Stack
      onSubmit={handleFormSubmit}
      component="form"
      justifyContent="center"
      spacing={2}>
      <Paper>
        <Input
          value={state.collectionName}
          onChange={handleCollNameChange}
          placeholder="Enter a collection name"
          label="Collection Name"
          required
        />
      </Paper>

      <Paper>
        <Input
          value={state.description}
          multiline
          onChange={handleDescriptionChange}
          placeholder="Enter a description"
          rows={DESCRIPTION_ROWS}
          label="Description"
          required
        />
      </Paper>

      <Paper>
        <ImageUpload handleImageDrop={handleImageDrop} imgObjs={state.images} />
      </Paper>

      {state.images.length > 0 && (
        <Paper>
          <Tabs
            handleImageDelete={handleImageDelete}
            handleNameChange={handleImgNameChange}
            imgObjs={state.images}
          />
        </Paper>
      )}

      <Paper>
        <Input
          value={state.mintingPrice}
          onChange={handleMintPriceChange}
          placeholder="Enter a minting price"
          label="Minting Price"
          type="number"
          InputProps={priceInputProps(selectedNet)}
          required
        />
      </Paper>

      <Box sx={formFooterStyle}>
        {alertBox}
        {formButtons}
      </Box>
    </Stack>
  );
};

export default CreateNewPage;