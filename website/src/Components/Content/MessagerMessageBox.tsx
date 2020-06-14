import { Grid, Paper, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

declare interface MessagerMessageBoxProps {
  classes: any;
}

const MessagerMessageBox: React.FunctionComponent<MessagerMessageBoxProps> = ({
  classes,
}) => {
  const [messages, setMessages] = React.useState<string[]>([
    "Google",
    "Hello",
    "Test",
  ]);
  const [sent, setSent] = React.useState<string[]>(["Hello"]);

  const wasSent = (message: string) => {
    for (const sentMessage of sent) {
      if (sentMessage.indexOf(message) === 0) {
        return sentMessage;
      }
    }
    return null;
  };

  return (
    <Fragment>
      {messages.map((message, index) => {
        if (!message) {
          return <Fragment></Fragment>;
        }
        return (
          <Grid
            key={index}
            container
            spacing={2}
            justify={wasSent(message) === null ? "flex-start" : "flex-end"}
            className={classes.fullWidth}
          >
            <Grid item xs={11}>
              <Paper className={classes.padded}>
                <Typography variant="body1">
                  {wasSent(message) || message}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        );
      })}
    </Fragment>
  );
};

export default MessagerMessageBox;
