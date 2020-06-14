import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

declare interface NavBarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  pageTitle: string;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({
  theme,
  toggleTheme,
  pageTitle,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {pageTitle ? `${pageTitle} - ` : ""}Dance 'Til You Drop
          </Typography>

          <div>
            <IconButton
              aria-label="Toggle light/dark theme"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleTheme}
              color="inherit"
            >
              {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
