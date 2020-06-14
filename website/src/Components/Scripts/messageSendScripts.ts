import { playAudioForCharacter } from "./audioPlayerScripts";

const queue: string[] = [];

export const insertIntoQueue = (string: string) => {
  const initQueueLength = queue.length;
  let index = 0;
  while (index < string.length) {
    queue.push(string.substring(index, index + 1));
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
