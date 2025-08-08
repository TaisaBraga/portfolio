import { MenuItem } from "@mui/material";

interface IMenuProps{
    name: string,
    linkAddress: () => void
}

function NavigationMenuItem(props: IMenuProps) {
  return (
    <MenuItem
      sx={{
        "&:hover": {
          backgroundColor: "#A3B18A",
          color: "white",
          borderRadius: "5px",
        }
      }}
      onClick={props.linkAddress}
    >
      {props.name}
    </MenuItem>
  );
}

export default NavigationMenuItem;
