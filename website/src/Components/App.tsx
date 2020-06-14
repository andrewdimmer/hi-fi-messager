import { Container, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { styles } from "../Styles";
import NavBar from "./Layouts/NavBar";

declare interface AppProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const App: React.FunctionComponent<AppProps> = ({ theme, toggleTheme }) => {
  const classes = styles();

  return (
    <Fragment>
      <NavBar
        pageTitle="HiFi Messager"
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Container className={classes.marginedTopBottom}>
        <Container className={classes.pageTitle}>
          <Typography variant="h3">Welcome to HiFi Messager!</Typography>
        </Container>
      </Container>
    </Fragment>
  );
};

export default App;
