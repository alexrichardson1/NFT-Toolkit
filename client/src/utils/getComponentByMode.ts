import { PaletteMode } from "@mui/material";

const getComponentByMode = <T>(
  mode: PaletteMode,
  lightComponent: T,
  darkComponent: T
): T => {
  if (mode === "light") {
    return lightComponent;
  }
  return darkComponent;
};

export default getComponentByMode;
