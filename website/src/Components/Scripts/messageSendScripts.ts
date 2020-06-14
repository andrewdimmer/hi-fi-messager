import { playAudioForCharacter } from "./audioPlayerScripts";

const queue: string[] = [];

export const insertIntoQueue = (string: string) => {
  const initQueueLength = queue.length;
  let index = 0;
  while (index < string.length) {
    const character = string.substring(index, index + 1).toUpperCase();
    switch (character) {
      case " ":
        queue.push("SPACE");
        break;
      case "/n":
        queue.push("ENTER");
        break;
      case "1":
        queue.push("NUM1");
        break;
      case "/":
        queue.push("SLASH");
        break;
      case ".":
        queue.push("PERIOD");
        break;
      case ",":
        queue.push("COMMA");
        break;
      case "H":
        if (string.toUpperCase().indexOf("HTTPS://", index) === index) {
          queue.push("HTTPS");
          index += 7;
        } else {
          queue.push("H");
        }
        break;
      default:
        queue.push(character);
        break;
    }

    index++;
  }
  if (initQueueLength === 0) {
    sendMessage();
  }
};

const sendMessage = () => {
  const nextLetter = queue.shift()?.toUpperCase();

  if (nextLetter) {
    setTimeout(sendMessage, playAudioForCharacter(nextLetter) * 1000 + 100);
  }
};
