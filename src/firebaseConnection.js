import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {
  APIKEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID,
} from "@env";

let firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

if (!firebase.apps.length) {
  //Abrir minha conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
