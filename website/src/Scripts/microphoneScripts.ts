import { stopSpectrogram } from "./spectrogramScripts";

let audioStream: MediaStream | null = null;

export const getAudioStream = () => audioStream;

const setAudioStream = (stream: MediaStream | null) => (audioStream = stream);

export const startMic = () => {
  navigator.getUserMedia(
    {
      video: false,
      audio: true,
    },
    setAudioStream,
    handleMicError
  );
};

export const stopMic = () => {
  if (audioStream) {
    for (const track of audioStream.getTracks()) {
      track.stop();
    }
    audioStream = null;
    stopSpectrogram();
  }
};

const handleMicError = (error: any) => {
  alert(error);
  console.log(error);
};
