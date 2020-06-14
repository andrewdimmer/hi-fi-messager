import Mic from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import { Tooltip, Fab } from "@material-ui/core";
import React from "react";

declare interface ToggleAudioButtonProps {
  micOn: boolean;
  toggleMic: () => void;
  classes: any;
}

const ToggleAudioButton: React.FunctionComponent<ToggleAudioButtonProps> = ({
  micOn,
  toggleMic,
  classes,
}) => {
  return (
    <Tooltip
      title={micOn ? "Mute Audio" : "Unmute Audio"}
      placement="top"
      PopperProps={{ disablePortal: true }}
    >
      <Fab color="primary" onClick={toggleMic}>
        {micOn ? <Mic /> : <MicOff />}
      </Fab>
    </Tooltip>
  );
};

export default ToggleAudioButton;
