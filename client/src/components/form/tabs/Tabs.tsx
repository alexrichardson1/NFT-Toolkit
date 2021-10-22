import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { DEFAULT_MUI_DARK } from "utils/constants";
import { getComponentByMode } from "utils/getComponentByMode";
import Input from "../Input";
import TabPanel from "./TabPanel";

const tabsStyle = { borderRight: 1, borderColor: "divider" };
const nameInputStyle = { flexGrow: 1 };
const vTabsContainerStyle = {
  flexGrow: 1,
  bgcolor: "background.paper",
  display: "flex",
  height: "50vh",
  border: 1,
  borderRadius: 1,
};
const inputAndDeleteContainer = {
  gap: "10px",
  display: "flex",
  width: 1,
  alignItems: "center",
};
const accessibilityProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

interface PropsT {
  imgObjs: ImageListT;
  handleImageDelete: (deleteId: string) => void;
  handleNameChange: (e: InputEventT, id: string) => void;
}

const VerticalTabs = (props: PropsT): JSX.Element => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={vTabsContainerStyle}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        allowScrollButtonsMobile
        selectionFollowsFocus
        value={value}
        onChange={(_e, newValue) =>
          setValue(newValue < props.imgObjs.length ? newValue : 0)
        }
        TabScrollButtonProps={{
          sx: {
            color: (theme) =>
              getComponentByMode(theme.palette.mode, DEFAULT_MUI_DARK, "white"),
          },
        }}
        sx={tabsStyle}>
        {props.imgObjs.map((imgObj, idx) => (
          <Tab
            key={imgObj.id}
            label={`Image ${idx + 1}`}
            {...accessibilityProps(idx)}
          />
        ))}
      </Tabs>

      {props.imgObjs.map((imgObj, idx) => (
        <TabPanel key={imgObj.id} value={value} index={idx}>
          <Box sx={inputAndDeleteContainer}>
            <Input
              sx={nameInputStyle}
              label="Name"
              value={imgObj.name}
              placeholder="Enter a name for this NFT here"
              required
              onChange={(e) => props.handleNameChange(e, imgObj.id)}
            />
            <IconButton onClick={() => props.handleImageDelete(imgObj.id)}>
              <DeleteIcon fontSize="large" color="error" />
            </IconButton>
          </Box>
          <img width="100%" src={imgObj.url} alt={imgObj.image.name} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default VerticalTabs;
