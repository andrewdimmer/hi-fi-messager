import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import CustomThemeProvider from "./Styles/CustomThemeProvider";
import { initAudio } from "./Scripts/audioPlayerScripts";

initAudio();
ReactDOM.render(<CustomThemeProvider />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
