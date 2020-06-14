import { Fab, Grid } from "@material-ui/core";
import DebugIcon from "@material-ui/icons/BugReport";
import React, { Fragment } from "react";
import {
  stopSpectrogram,
  startSpectrogram,
} from "../Scripts/spectrogramScripts";
import { getAudioStream } from "../Scripts/microphoneScripts";

declare interface AudioSpectrogramProps {
  micOn: boolean;
  classes: any;
}

const AudioSpectrogram: React.FunctionComponent<AudioSpectrogramProps> = ({
  micOn,
  classes,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const toggleOpen = () => {
    if (open) {
      stopSpectrogram();
    }
    setOpen(!open);
  };

  if (!micOn && open !== false) {
    setOpen(false);
  }

  return (
    <Fragment>
      {open && (
        <Fragment>
          <canvas ref={canvasRef} />
          {setTimeout(() => {
            const audioStream = getAudioStream();
            if (audioStream && canvasRef.current) {
              startSpectrogram(audioStream, canvasRef.current);
            }
          }, 10) && <Fragment></Fragment>}
        </Fragment>
      )}
      <Grid
        container
        justify="flex-end"
        className={classes.fullWidth}
        spacing={2}
      >
        <Grid item>
          <Fab color="primary" onClick={toggleOpen} disabled={!micOn}>
            <DebugIcon />
          </Fab>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AudioSpectrogram;
