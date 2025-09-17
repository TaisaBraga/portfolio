import { MenuItem } from "@mui/material";

interface IMenuProps {
  name: string;
  linkAddress: () => void;
}

function NavigationMenuItem(props: IMenuProps) {
  return (
    <MenuItem
      sx={{
        transition: "border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          color: "white",
          backgroundColor: "transparent",
          borderTop: "2px dashed #6F6F6F",
          borderBottom: "2px dashed #6F6F6F",
        },
      }}
      onClick={props.linkAddress}
    >
      {props.name}
    </MenuItem>
  );
}

export default NavigationMenuItem;
