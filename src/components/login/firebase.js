import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAEbwC8Cm5DOjUUizfYJjt2qdlsC1FR9gE",
  authDomain: "prime-video-clone-cb21e.firebaseapp.com",
  projectId: "prime-video-clone-cb21e",
  storageBucket: "prime-video-clone-cb21e.appspot.com",
  messagingSenderId: "394915682400",
  appId: "1:394915682400:web:60432b50b453cf52618b05",
  measurementId: "G-QPCRWMYXPH",
});

export const auth = app.auth();
export default app;
