import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { lightTheme as light, darkTheme as dark } from "./theme";

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    padded: {
      padding: theme.spacing(2),
    },
    margined: {
      margin: theme.spacing(2),
    },
    marginedTopBottom: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    marginedPadded: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
    marginRight: {
      marginRight: theme.spacing(2),
    },
    marginsAuto: {
      margin: "auto",
    },
    centerText: {
      textAlign: "center",
    },
    pageTitle: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    themeBackgroundColor: {
      background: theme.palette.background.default,
    },
    fullWidth: {
      width: "100%",
    },
  })
);

export const lightTheme = light;
export const darkTheme = dark;
