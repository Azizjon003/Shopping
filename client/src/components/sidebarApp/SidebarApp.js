import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { categoryLink } from "./SidebarData";
import SidebarCategory from "./SidebarCategory";
import { useState } from "react";

export default function SidebarApp() {
  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 800 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {categoryLink.map((text, index) => (
          <ListItem key={index} 
          sx={{display: 'block'}}
          >
            {/* <ListItemButton> */}
              <Typography 
              component="div"
              variant="h6"
              >
              {text.nameChap}
              </Typography>

              <ListItemText
                primary={text.categoryChap.map((item, i) => {
                  return  <SidebarCategory  data={item} i={i} />
                })}
                />
            {/* </ListItemButton> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box
          onClick={toggleDrawer("left", true)}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid ",
            padding: "5px 15px",
            borderRadius: "18px",
            justifyContent: "center",
          }}
        >
          <MenuIcon
            sx={{
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            Каталог
          </Typography>
        </Box>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
