import { playAudioForCharacter } from "./audioPlayerScripts";
import { firebaseApp } from "./firebaseConfig";

const queue: string[] = [];

export const insertIntoQueue = (string: string) => {
  const initQueueLength = queue.length;
  let index = 0;
  while (index < string.length) {
    const character = string.substring(index, index + 1).toUpperCase();
    console.log(character);
    switch (character) {
      case " ":
        queue.push("SPACE");
        break;
      case "*":
        if (string.toUpperCase().indexOf("*ENTER", index) === index) {
          queue.push("ENTER");
          index += 5;
        }
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
    setTimeout(() => {
      sendToDatabase(nextLetter);
      sendMessage();
    }, playAudioForCharacter(nextLetter) * 1000 + 200);
  }
};

const sendToDatabase = (key: string) => {
  let send = "";
  switch (key) {
    case "SPACE":
      send = " ";
      break;
    case "NUM1":
      send = "1";
      break;
    case "SLASH":
      send = "/";
      break;
    case "PERIOD":
      send = ".";
      break;
    case "COMMA":
      send = ",";
      break;
    case "HTTPS":
      send = "HTTPS://";
      break;
    default:
      send = key;
      break;
  }

  const docRef = firebaseApp.firestore().collection("data").doc("data");
  docRef
    .get()
    .then((value) => {
      const data = value.data();
      if (data) {
        if (send !== "ENTER") {
          const newLastString = data.data[data.data.length - 1] + send;
          data.data[data.data.length - 1] = newLastString;
        } else {
          data.data.push("");
        }
        docRef
          .set({ data: data.data })
          .then(() => console.log("Added: " + send))
          .catch((err) => console.log(err));
      } else {
        console.log("No Data.");
      }
    })
    .catch((err) => console.log(err));
};
