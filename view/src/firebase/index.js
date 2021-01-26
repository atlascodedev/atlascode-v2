import app from "firebase/app";
import { firebaseConfig } from "../config/firebase";

const firebase = app.initializeApp(firebaseConfig);

export default firebase;
