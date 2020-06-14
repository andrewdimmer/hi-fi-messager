import { Container, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { styles } from "../Styles";
import AudioSpectrogram from "./Content/AudioSpectrogram";
import NavBar from "./Layouts/NavBar";
import ToggleAudioButton from "./Content/ToggleAudioButton";
import { startMic, stopMic } from "./Scripts/microphoneScripts";

declare interface AppProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const App: React.FunctionComponent<AppProps> = ({ theme, toggleTheme }) => {
  const [micOn, setMicOn] = React.useState<boolean>(false);

  const classes = styles();

  const toggleMic = () => {
    if (!micOn) {
      startMic();
    } else {
      stopMic();
    }
    setMicOn(!micOn);
  };

  return (
    <Fragment>
      <NavBar pageTitle="" theme={theme} toggleTheme={toggleTheme} />
      <Container className={classes.marginedTopBottom}>
        <Container className={classes.pageTitle}>
          <Typography variant="h3">Welcome to HiFi Messager!</Typography>
        </Container>
      </Container>
      <ToggleAudioButton
        micOn={micOn}
        toggleMic={toggleMic}
        classes={classes}
      />
      <AudioSpectrogram micOn={micOn} classes={classes} />
    </Fragment>
  );
};

export default App;
