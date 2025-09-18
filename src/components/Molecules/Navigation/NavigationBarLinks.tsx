import i18n from "i18next";
import "./NavigationBarLinks.css";
import NavigationMenuItem from "../../Atoms/NavigationMenuItem";
import { useTranslation } from "react-i18next";
import usFlag from "../../../assets/US-Flag.svg";
import brFlag from "../../../assets/BR-Flag.svg";
import { Box, Drawer, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function NavigationBarLinks() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:850px)");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = (
    <>
      <NavigationMenuItem
        name={t("navHome")}
        linkAddress={() => scrollToSection("aboutme")}
      />
      <NavigationMenuItem
        name={t("navProjects")}
        linkAddress={() => scrollToSection("projects")}
      />
      <NavigationMenuItem
        name={t("navSkills")}
        linkAddress={() => scrollToSection("skills")}
      />
      <NavigationMenuItem
        name={t("navContact")}
        linkAddress={() => scrollToSection("contact")}
      />
      <div className="lang">
        <button className="enLang" onClick={() => i18n.changeLanguage("EN")}>
          <img src={usFlag} alt="USA Flag" />
          EN
        </button>
        <button className="ptLang" onClick={() => i18n.changeLanguage("PT")}>
          <img src={brFlag} alt="BR Flag" />
          PT
        </button>
      </div>
    </>
  );

  return (
    <Box>
      <div className="container-nav">
        {isMobile ? (
          <>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={open}
              onClose={() => setOpen(false)}
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: "#312e34",
                    width: 250,
                  },
                },
              }}
            >
              <Box
                sx={{
                  width: 250,
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {menuItems}
              </Box>
            </Drawer>
          </>
        ) : (
          <div className="links">{menuItems}</div>
        )}
      </div>
    </Box>
  );
}

export default NavigationBarLinks;
