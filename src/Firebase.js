import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "your-api-key",
  authDomain: "todolist-84b5d.firebaseapp.com",
  databaseURL: "https://todolist-84b5d-default-rtdb.firebaseio.com",
  projectId: "todolist-84b5d",
  storageBucket: "todolist-84b5d.appspot.com",
  messagingSenderId: "859787408932",
  appId: "1:859787408932:web:2c1d6771fda8d3181e0ab1",
  measurementId: "G-66B69HB1V9"
};
export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');
