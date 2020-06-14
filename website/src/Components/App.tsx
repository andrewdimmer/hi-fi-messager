import { Container, Divider, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { styles } from "../Styles";
import AudioSpectrogram from "./Content/AudioSpectrogram";
import MessagerSendBar from "./Content/MessagerSendBar";
import NavBar from "./Layouts/NavBar";
import { startMic, stopMic } from "../Scripts/microphoneScripts";
import MessagerMessageBox from "./Content/MessagerMessageBox";

declare interface AppProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const App: React.FunctionComponent<AppProps> = ({ theme, toggleTheme }) => {
  const [micOn, setMicOn] = React.useState<boolean>(false);
  const [sent, setSent] = React.useState<string[]>([]);

  const classes = styles();

  const toggleMic = () => {
    if (!micOn) {
      startMic();
    } else {
      stopMic();
    }
    setMicOn(!micOn);
  };

  const recordSentMessage = (message: string) => {
    const newSent = sent.concat([]);
    newSent.push(message);
    setSent(newSent);
  };

  return (
    <Fragment>
      <NavBar pageTitle="" theme={theme} toggleTheme={toggleTheme} />
      <Container className={classes.marginedTopBottom}>
        <Container className={classes.pageTitle}>
          <Typography variant="h3">Welcome to HiFi Messager!</Typography>
        </Container>
        <MessagerMessageBox classes={classes} sent={sent} />
        <MessagerSendBar
          micOn={micOn}
          toggleMic={toggleMic}
          recordSentMessage={recordSentMessage}
          classes={classes}
        />
      </Container>
      <Divider className={classes.margined} />
      <AudioSpectrogram micOn={micOn} classes={classes} />
    </Fragment>
  );
};

export default App;
