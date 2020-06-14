import Spectrogram from "spectrogram";
import chroma from "chroma-js";

let spectro: Spectrogram | null = null;

export const startSpectrogram = (
  stream: MediaStream,
  canvas: HTMLCanvasElement
) => {
  spectro = Spectrogram(canvas, {
    canvas: {
      width: function () {
        return window.innerWidth;
      },
      height: 500,
    },
    audio: {
      enable: true,
    },
    colors: (steps) => {
      var scale = chroma
        .scale(["white", "green", "yellow", "red"])
        .domain([0, steps]);

      var colors = [];

      for (var i = 0; i < steps; ++i) {
        var color = scale(i);
        colors.push(color.hex());
      }

      return colors;
    },
  });
  const audioContext = new window.AudioContext();
  const input = audioContext.createMediaStreamSource(stream);
  const analyser = audioContext.createAnalyser();

  analyser.smoothingTimeConstant = 0;
  analyser.fftSize = 2048;

  input.connect(analyser);

  spectro.connectSource(analyser, audioContext);
  spectro.start();
};

export const stopSpectrogram = () => {
  spectro?.stop();
  spectro = null;
};
