import { Fab, Grid, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import ToggleAudioButton from "./ToggleAudioButton";
import { insertIntoQueue } from "../../Scripts/messageSendScripts";

declare interface MessagerSendBarProps {
  micOn: boolean;
  toggleMic: () => void;
  classes: any;
}

const MessagerSendBar: React.FunctionComponent<MessagerSendBarProps> = ({
  micOn,
  toggleMic,
  classes,
}) => {
  const [newMessage, setNewMessage] = React.useState<string>("");

  const handleNewMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewMessage(event.target.value);
  };

  const sendNewMessage = () => {
    insertIntoQueue(newMessage + "*ENTER");
    setNewMessage("");
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className={classes.fullWidth}
    >
      <Grid item xs={12} sm={8} md={10}>
        <TextField
          fullWidth
          value={newMessage}
          onChange={handleNewMessageChange}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6} sm={2} md={1} className={classes.centerText}>
        <Fab color="primary" onClick={sendNewMessage}>
          <SendIcon />
        </Fab>
      </Grid>
      <Grid item xs={6} sm={2} md={1} className={classes.centerText}>
        <ToggleAudioButton
          micOn={micOn}
          toggleMic={toggleMic}
          classes={classes}
        />
      </Grid>
    </Grid>
  );
};

export default MessagerSendBar;
