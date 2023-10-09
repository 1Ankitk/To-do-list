import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://your-project-name.firebaseio.com",   // Replace with your actual URL
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');
