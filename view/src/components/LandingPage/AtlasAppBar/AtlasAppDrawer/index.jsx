import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  SwipeableDrawer,
} from "@material-ui/core";
import { AccountBalance } from "@material-ui/icons";
import React from "react";
import AtlasLogo from "../../../AtlasLogo";
import AppDrawerListItem from "./AppDrawerListItem";
const useStyles = makeStyles((theme) => ({
  appBarRoot: {},

  topMenuPaper: {
    backgroundColor: "#0c3f53",
    paddingBottom: "8px",
    width: "60vw",
  },

  appDrawerList: {
    display: "flex",
    fontSize: "2em",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
}));

function AtlasAppDrawer({ open, handleClose, handleOpen, menuItems }) {
  const classes = useStyles();

  const [logoSize, setLogoSize] = React.useState(125);

  return (
    <div>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        className={classes.appBarRoot}
      >
        <Paper square className={classes.topMenuPaper} elevation={5}>
          {" "}
          <Box pl={2} pr={3}>
            <AtlasLogo width={logoSize} />
          </Box>
        </Paper>
        <List className={classes.appDrawerList}>
          {menuItems.map((item, index) => (
            <AppDrawerListItem
              style={{ cursor: "pointer" }}
              onClick={() => {
                item.scrollFunction();
                setTimeout(() => {
                  handleClose();
                }, 750);
              }}
              key={index}
              text={item.menuName}
            ></AppDrawerListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default AtlasAppDrawer;
