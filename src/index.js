import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD0gyAu30K2TrW4cN2UtpCDf_fmtfvg1_Q",
  authDomain: "my-project-c86c2.firebaseapp.com",
  databaseURL: "https://my-project-c86c2.firebaseio.com",
  projectId: "my-project-c86c2",
  storageBucket: "my-project-c86c2.appspot.com",
  messagingSenderId: "917329553165",
  appId: "1:917329553165:web:b6e85ce1206f64b0"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

ReactDOM.render(<App />, document.getElementById("root"));
