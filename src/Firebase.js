import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://your-project-name.firebaseio.com",   // Replace with your actual URL
  projectId: "todolist-84b5d",
  storageBucket: "todolist-84b5d.appspot.com",
  messagingSenderId: "859787408932",
  appId: "1:859787408932:web:2c1d6771fda8d3181e0ab1",
};
export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');
