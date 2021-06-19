import firebase from "firebase/app";
import "firebase/database";
import config from './env';

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

// const auth = firebase.auth();
const db = firebase.database();

export {db};
