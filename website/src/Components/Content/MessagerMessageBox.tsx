import { Grid, Paper, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { firebaseApp } from "../../Scripts/firebaseConfig";

declare interface MessagerMessageBoxProps {
  sent: string[];
  classes: any;
}

const MessagerMessageBox: React.FunctionComponent<MessagerMessageBoxProps> = ({
  sent,
  classes,
}) => {
  const [messages, setMessages] = React.useState<string[]>([""]);

  const wasSent = (message: string) => {
    for (const sentMessage of sent) {
      if (sentMessage.toUpperCase().indexOf(message) === 0) {
        return sentMessage;
      }
    }
    return null;
  };

  const listener = firebaseApp
    .firestore()
    .collection("data")
    .doc("data")
    .onSnapshot({
      next: (snapshot) => {
        const data = snapshot.data();
        if (
          data &&
          data.data[data.data.length - 1].length !==
            messages[messages.length - 1].length
        ) {
          setMessages(data.data);
          listener();
        }
      },
      error: (err) => console.log(err),
    });

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
